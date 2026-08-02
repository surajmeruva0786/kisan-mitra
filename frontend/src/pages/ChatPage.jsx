import { useEffect, useRef, useState } from 'react';
import { useLanguage, SPEECH_LANG } from '../i18n/LanguageContext.jsx';
import { useProfile } from '../context/ProfileContext.jsx';
import { api } from '../lib/api.js';
import Logo from '../components/Logo.jsx';

let uidCounter = 1;
const uid = () => `msg${uidCounter++}`;

const QUICK_ACTIONS = ['quickWeather', 'quickPrices', 'quickSchemes', 'quickCalendar', 'quickPest'];

export default function ChatPage() {
  const { t, language } = useLanguage();
  const { profile } = useProfile();
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState('');
  const [typing, setTyping] = useState(false);
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const greeting = profile.name ? `${greetingWord(language)}, ${profile.name}` : greetingWord(language);
    setMessages([{ id: uid(), from: 'bot', type: 'text', text: `${greeting}. ${t('chatSubGreeting')}.` }]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  async function sendMessage(rawText) {
    const text = (rawText !== undefined ? rawText : draft).trim();
    if (!text) return;
    setMessages((prev) => [...prev, { id: uid(), from: 'user', type: 'text', text }]);
    setDraft('');
    setTyping(true);
    try {
      const { reply } = await api.postChat(text, language);
      setMessages((prev) => [...prev, { id: uid(), from: 'bot', ...reply }]);
    } catch {
      setMessages((prev) => [...prev, { id: uid(), from: 'bot', type: 'text', text: "Sorry, I couldn't reach the server. Please try again." }]);
    } finally {
      setTyping(false);
    }
  }

  function toggleMic() {
    if (listening) {
      recognitionRef.current?.stop();
      setListening(false);
      return;
    }
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      alert('Voice input is not supported in this browser.');
      return;
    }
    const rec = new SR();
    rec.lang = SPEECH_LANG[language] || 'en-IN';
    rec.interimResults = true;
    rec.continuous = false;
    rec.onresult = (e) => {
      let transcript = '';
      for (let i = 0; i < e.results.length; i++) transcript += e.results[i][0].transcript;
      const isFinal = e.results[e.results.length - 1].isFinal;
      setDraft(transcript);
      setListening(!isFinal);
    };
    rec.onend = () => setListening(false);
    rec.onerror = () => setListening(false);
    recognitionRef.current = rec;
    setListening(true);
    try {
      rec.start();
    } catch {
      setListening(false);
    }
  }

  return (
    <div className="flex h-full flex-col">
      <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
        {messages.map((m) => (
          <MessageBubble key={m.id} message={m} />
        ))}
        {typing && <TypingBubble />}
      </div>

      <div className="flex gap-2 overflow-x-auto border-t border-gray-100 px-4 py-2.5">
        {QUICK_ACTIONS.map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => sendMessage(t(key))}
            className="shrink-0 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-gray-700 hover:border-brand-300 cursor-pointer"
          >
            {t(key)}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 border-t border-gray-200 p-3">
        {profile.voiceAssist && (
          <button
            type="button"
            onClick={toggleMic}
            aria-label={t('listening')}
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full cursor-pointer ${
              listening ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700'
            }`}
          >
            🎤
          </button>
        )}
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder={listening ? t('listening') : t('typeMessage')}
          className="flex-1 rounded-full border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-brand-400"
        />
        <button
          type="button"
          onClick={() => sendMessage()}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-brand-500 text-white cursor-pointer"
          aria-label="Send"
        >
          ➤
        </button>
      </div>
    </div>
  );
}

function greetingWord(lang) {
  if (lang === 'te') return 'నమస్కారం';
  if (lang === 'hi') return 'नमस्ते';
  return 'Hello';
}

function MessageBubble({ message }) {
  if (message.from === 'user') {
    return (
      <div className="flex justify-end">
        <div className="max-w-[78%] rounded-tl-2xl rounded-tr-sm rounded-b-2xl bg-gradient-to-r from-indigo-500 to-brand-500 px-3.5 py-2.5 text-sm text-white fs-scale">
          {message.text}
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-start gap-2">
      <div className="mt-0.5 shrink-0">
        <Logo size={24} />
      </div>
      <div className="max-w-[78%] rounded-tr-2xl rounded-tl-sm rounded-b-2xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm fs-scale">
        <p className="m-0">{message.text}</p>
        {message.type === 'list' && message.items?.length > 0 && (
          <ul className="mt-1.5 space-y-1">
            {message.items.map((item, i) => (
              <li key={i} className="flex gap-1.5 text-[13.5px] text-gray-700">
                <span>&bull;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function TypingBubble() {
  return (
    <div className="flex items-center gap-2">
      <Logo size={24} />
      <div className="flex gap-1 rounded-2xl border border-gray-200 bg-white px-3.5 py-3">
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.2s]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:0.2s]" />
      </div>
    </div>
  );
}

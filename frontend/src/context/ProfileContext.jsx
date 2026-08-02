import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'km_profile';

const DEFAULT_PROFILE = {
  name: '',
  state: '',
  district: '',
  crops: [],
  landSize: '',
  textSize: 'normal',
  highContrast: false,
  voiceAssist: true,
  notifications: { weather: true, prices: true, schemes: true },
  onboardingComplete: false,
};

function loadProfile() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...DEFAULT_PROFILE, ...JSON.parse(raw) } : DEFAULT_PROFILE;
  } catch {
    return DEFAULT_PROFILE;
  }
}

const ProfileContext = createContext(null);

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(loadProfile);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    const mult = profile.textSize === 'xlarge' ? 1.3 : profile.textSize === 'large' ? 1.15 : 1;
    document.documentElement.style.setProperty('--fs-mult', mult);
  }, [profile.textSize]);

  useEffect(() => {
    document.documentElement.classList.toggle('high-contrast', profile.highContrast);
  }, [profile.highContrast]);

  const updateProfile = (patch) => setProfile((prev) => ({ ...prev, ...patch }));

  const value = useMemo(() => ({ profile, setProfile, updateProfile }), [profile]);

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
}

export function useProfile() {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error('useProfile must be used within a ProfileProvider');
  return ctx;
}

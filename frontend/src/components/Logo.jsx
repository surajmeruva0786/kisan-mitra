/** The Kisan-Mitra mark: a purple ring with a rising sun/leaf arc. */
export default function Logo({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <g transform="translate(32, 32)">
        <circle cx="0" cy="0" r="26" stroke="#7C3AED" strokeWidth="4.5" fill="none" />
        <path d="M-22,-18 A34,34 0 0,1 22,-18" stroke="url(#km-logo-gradient)" strokeWidth="4" strokeLinecap="round" fill="none" />
        <circle cx="0" cy="0" r="4.5" fill="#7C3AED" />
      </g>
      <defs>
        <linearGradient id="km-logo-gradient" x1="10" y1="14" x2="54" y2="14">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#6D28D9" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Pill({ active, onClick, children, className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold font-sans transition cursor-pointer ${
        active
          ? 'border-brand-500 bg-brand-50 text-brand-600'
          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
      } ${className}`}
    >
      {children}
    </button>
  );
}

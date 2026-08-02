const VARIANTS = {
  primary:
    'bg-gradient-to-r from-indigo-500 to-brand-500 text-white shadow-sm hover:brightness-105',
  secondary: 'bg-brand-50 text-brand-600 hover:bg-brand-100',
  ghost: 'bg-transparent text-gray-600 hover:bg-gray-100',
};

export default function Button({ variant = 'primary', className = '', children, ...props }) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold font-sans transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

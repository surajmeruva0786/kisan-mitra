export default function Card({ className = '', children, ...props }) {
  return (
    <div className={`rounded-2xl border border-black/8 bg-white p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

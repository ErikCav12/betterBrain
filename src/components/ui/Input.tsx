interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  name?: string;
  className?: string;
}

export function Input({
  label,
  type = "text",
  placeholder,
  required,
  name,
  className = "",
}: InputProps) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm text-muted mb-1.5">
          {label}
          {required && <span className="text-accent ml-0.5">*</span>}
        </label>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
      />
    </div>
  );
}

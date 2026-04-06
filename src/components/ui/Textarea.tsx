interface TextareaProps {
  label?: string;
  placeholder?: string;
  required?: boolean;
  name?: string;
  rows?: number;
  className?: string;
}

export function Textarea({
  label,
  placeholder,
  required,
  name,
  rows = 4,
  className = "",
}: TextareaProps) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm text-muted mb-1.5">
          {label}
          {required && <span className="text-accent ml-0.5">*</span>}
        </label>
      )}
      <textarea
        name={name}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className="w-full bg-background border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
      />
    </div>
  );
}

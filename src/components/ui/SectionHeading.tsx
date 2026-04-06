interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {label && (
        <span className="text-accent text-sm font-semibold tracking-wider uppercase block mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p
          className={`text-muted text-lg ${centered ? "max-w-2xl mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

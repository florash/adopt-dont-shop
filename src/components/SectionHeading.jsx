export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cocoa/70">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl leading-tight text-ink md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-ink/72 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

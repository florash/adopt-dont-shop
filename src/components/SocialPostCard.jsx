export default function SocialPostCard({
  label,
  quote,
  accent,
  image,
  badge,
  subline,
  eyebrow,
  align = 'left',
  panelTone = 'bg-[#fff8f3]/93',
}) {
  const panelAlignment =
    align === 'center'
      ? 'mx-auto'
      : align === 'right'
        ? 'ml-auto'
        : 'mr-auto';

  return (
    <article className="group rounded-[2rem] bg-[#fffaf6] p-4 shadow-cloud transition-all duration-[320ms] ease-out hover:-translate-y-1 hover:shadow-[0_26px_62px_rgba(143,112,92,0.09)] motion-reduce:transform-none">
      <div className={`overflow-hidden rounded-[1.6rem] ${accent}`}>
        <div className="flex items-center justify-between border-b border-white/50 px-4 py-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cocoa/70">
              {badge}
            </p>
            <p className="mt-1 text-sm font-semibold text-ink">Adopt, Don’t Shop</p>
          </div>
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
          </div>
        </div>

        <div className="relative aspect-square">
          <img
            src={image}
            alt={label}
            className="h-full w-full object-cover saturate-[.77] brightness-[.86] contrast-[.88] transition-transform duration-[320ms] ease-out group-hover:scale-[1.015] motion-reduce:transform-none"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,245,237,0.24),rgba(69,54,47,0.12))]" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/36 via-transparent to-white/15" />
          <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply [background-image:linear-gradient(rgba(118,91,81,0.24)_1px,transparent_1px),linear-gradient(90deg,rgba(118,91,81,0.16)_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="absolute inset-x-0 bottom-0 p-4">
            <div className={`${panelAlignment} max-w-[88%] rounded-[1.4rem] ${panelTone} p-4 shadow-card`}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cocoa/70">
                {eyebrow || 'Social tile'}
              </p>
              <p className="mt-2 max-w-[14ch] font-display text-[1.85rem] leading-tight text-ink">
                {quote}
              </p>
              {subline ? (
                <p className="mt-2 text-sm leading-6 text-ink/68">{subline}</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

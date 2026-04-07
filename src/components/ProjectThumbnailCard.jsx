export default function ProjectThumbnailCard({
  image,
  title,
  subtitle,
  description,
  tags,
}) {
  return (
    <article className="group max-w-[20rem] overflow-hidden rounded-[1.6rem] border border-white/75 bg-white shadow-cloud transition-all duration-[320ms] ease-out hover:-translate-y-1 hover:shadow-[0_28px_64px_rgba(143,112,92,0.10)] motion-reduce:transform-none">
      <div className="relative h-[10.2rem] overflow-hidden bg-[#f5e7db]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center brightness-[.94] contrast-[1.02] saturate-[1.02] transition-transform duration-[320ms] ease-out group-hover:scale-[1.02] motion-reduce:transform-none"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(252,247,242,0.04),rgba(244,233,220,0.16))]" />
        <div className="absolute left-4 top-4 rounded-full bg-white/88 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cocoa shadow-sm">
          Campaign Design
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-[2rem] font-semibold leading-none text-ink">{title}</h3>
        <p className="mt-2 text-sm font-medium tracking-[0.16em] text-cocoa/72 uppercase">
          {subtitle}
        </p>
        <p className="mt-4 text-base leading-7 text-ink/68">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#f7f2eb] px-3 py-1.5 text-xs font-semibold text-cocoa"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-end">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cocoa/64 transition duration-[280ms] ease-out group-hover:text-cocoa">
            View Project →
          </span>
        </div>
      </div>
    </article>
  );
}

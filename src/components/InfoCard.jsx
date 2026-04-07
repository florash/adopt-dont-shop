export default function InfoCard({ title, children, tone = 'bg-white/80' }) {
  return (
    <article
      className={`${tone} rounded-2xl border border-white/70 p-6 shadow-card backdrop-blur-sm md:p-7`}
    >
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <div className="mt-3 space-y-3 text-sm leading-6 text-ink/72 md:text-base">{children}</div>
    </article>
  );
}

import { useEffect, useRef, useState } from 'react';

const detailRows = [
  { key: 'personality', label: 'Personality' },
  { key: 'loves', label: 'Loves' },
  { key: 'waitingFor', label: 'Waiting for' },
];

export default function AnimalStoryModal({ animal, onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const dialogRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const prefersReducedMotionRef = useRef(false);

  useEffect(() => {
    if (!animal) {
      return undefined;
    }

    prefersReducedMotionRef.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    const frame = requestAnimationFrame(() => {
      setIsVisible(true);
    });

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClose();
        return;
      }

      if (event.key === 'Tab' && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        const focusable = Array.from(focusableElements).filter(
          (element) => !element.hasAttribute('disabled'),
        );

        if (focusable.length === 0) {
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    dialogRef.current?.querySelector('button')?.focus();

    return () => {
      cancelAnimationFrame(frame);
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
      }
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      setIsVisible(false);
    };
  }, [animal]);

  if (!animal) {
    return null;
  }

  const handleClose = () => {
    setIsVisible(false);
    closeTimeoutRef.current = window.setTimeout(() => {
      onClose();
    }, prefersReducedMotionRef.current ? 0 : 240);
  };

  const {
    image,
    profile: {
      name,
      age,
      tagline,
      personality,
      loves,
      waitingFor,
      closing,
      cta,
      accent,
      panelTone,
      metaTone,
      closingTone,
    },
  } = animal;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-[240ms] ease-out motion-reduce:transition-none md:p-6 ${
        isVisible ? 'bg-ink/42 backdrop-blur-sm' : 'bg-ink/0'
      }`}
      onClick={handleClose}
      aria-hidden="true"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`animal-story-${animal.id}`}
        ref={dialogRef}
        className={`relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/60 ${panelTone} shadow-[0_34px_90px_rgba(56,38,30,0.20)] transition-all duration-[240ms] ease-out motion-reduce:transition-none ${
          isVisible ? 'scale-100 opacity-100' : 'scale-[0.96] opacity-0'
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/88 text-lg text-cocoa shadow-sm transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cocoa/30"
          aria-label="Close story modal"
        >
          ×
        </button>

        <div className="grid md:grid-cols-[0.95fr_1.05fr]">
          <div className={`relative min-h-[22rem] ${accent} md:min-h-[38rem]`}>
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover saturate-[.8] brightness-[.9] contrast-[.9]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,244,236,0.24),transparent_40%,rgba(69,54,47,0.22)_100%)]" />
            <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply [background-image:linear-gradient(rgba(118,91,81,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(118,91,81,0.18)_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="absolute inset-x-5 bottom-5 rounded-[1.5rem] bg-white/78 p-5 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cocoa/70">
                Adoption Story
              </p>
              <p className="mt-2 text-sm leading-6 text-ink/68">{tagline}</p>
            </div>
          </div>

          <div className="relative px-6 py-8 md:px-8 md:py-10 lg:px-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(244,220,227,0.30),transparent_65%)]" />

            <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.28em] text-cocoa/65">
              Featured Profile
            </p>
            <h3
              id={`animal-story-${animal.id}`}
              className="relative z-10 mt-3 font-display text-5xl leading-none text-ink"
            >
              {name}
            </h3>
            <div className="relative z-10 mt-4 flex flex-wrap gap-2">
              <span className={`${metaTone} rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cocoa/70`}>
                {age}
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cocoa/60 shadow-sm">
                Adoption Story
              </span>
            </div>
            <p className="relative z-10 mt-4 max-w-xl font-display text-3xl leading-tight text-cocoa">
              {tagline}
            </p>

            <div className="relative z-10 mt-8 grid gap-4">
              {detailRows.map((row) => (
                <div
                  key={row.key}
                  className="rounded-[1.5rem] border border-cocoa/8 bg-white/70 px-5 py-4 shadow-card"
                >
                  <span className={`${metaTone} inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cocoa/62`}>
                    {row.label}
                  </span>
                  <p className="mt-2 text-base leading-7 text-ink/78">
                    {{ personality, loves, waitingFor }[row.key]}
                  </p>
                </div>
              ))}
            </div>

            <div className={`relative z-10 mt-8 rounded-[1.6rem] ${closingTone} px-5 py-5 shadow-card`}>
              <p className="font-display text-2xl leading-tight text-ink">{closing}</p>
            </div>

            <button
              type="button"
              className="relative z-10 mt-8 inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-cocoa focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cocoa/30"
            >
              {cta}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

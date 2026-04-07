import { useState } from 'react';
import doggyImage from '../doggy.jpeg';
import AnimalStoryModal from './components/AnimalStoryModal';
import InfoCard from './components/InfoCard';
import RevealSection from './components/RevealSection';
import SectionHeading from './components/SectionHeading';
import SocialPostCard from './components/SocialPostCard';

const overviewChips = ['Adoption Campaign', 'Social Content', 'Visual Storytelling'];

const posterCards = [
  {
    id: 'luna',
    title: 'I’m still waiting.',
    body: ['Every day, I watch people walk past.', 'Maybe today is my day.'],
    footer: 'Every pet deserves a safe and loving home.',
    image:
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80',
    tone: 'from-[#f1d8c8]/88 via-[#fff6ee]/42 to-transparent',
    stamp: 'Poster 01',
    profile: {
      name: 'Luna',
      age: '2 years old',
      tagline: 'I’m still waiting for someone to choose me.',
      personality: 'Gentle, observant, and quietly affectionate.',
      loves: 'Sunny corners, soft blankets, and calm company.',
      waitingFor: 'A peaceful home and a kind person to love.',
      closing: 'I may be quiet at first, but my heart is full.',
      cta: 'Meet Luna',
      accent: 'bg-[#fff5ec]',
      panelTone: 'bg-[#fff8f2]',
      metaTone: 'bg-[#fff1e6]',
      closingTone: 'bg-[#fff1e8]',
    },
  },
  {
    id: 'milo',
    title: 'Small paws. Big heart.',
    body: ['I don’t need much —', 'just someone to love me.'],
    footer: 'Adopt today and change a life.',
    image:
      'https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=1200&q=80',
    tone: 'from-[#f2d7e1]/88 via-[#fff7fa]/44 to-transparent',
    stamp: 'Poster 02',
    profile: {
      name: 'Milo',
      age: '1 year old',
      tagline: 'Small paws. Big heart.',
      personality: 'Curious, playful, and full of warmth.',
      loves: 'Chasing light, cozy naps, and being near people.',
      waitingFor: 'A home where he can feel safe and loved.',
      closing: 'I don’t need much — just someone to love me.',
      cta: 'Meet Milo',
      accent: 'bg-[#fff4f7]',
      panelTone: 'bg-[#fff8fb]',
      metaTone: 'bg-[#fff0f4]',
      closingTone: 'bg-[#fff0f6]',
    },
  },
  {
    id: 'poppy',
    title: 'Love lives here.',
    body: ['I just need someone to take me home.'],
    footer: 'Support adoption. Support second chances.',
    image:
      'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=1200&q=80',
    tone: 'from-[#dbe7dc]/84 via-[#fefbf6]/40 to-transparent',
    stamp: 'Poster 03',
    profile: {
      name: 'Poppy',
      age: '3 years old',
      tagline: 'Love lives here.',
      personality: 'Sweet, loyal, and full of quiet joy.',
      loves: 'Gentle walks, warm afternoons, and happy greetings.',
      waitingFor: 'A forever home and a second chance.',
      closing: 'One small act can change a whole life.',
      cta: 'Meet Poppy',
      accent: 'bg-[#f6faf5]',
      panelTone: 'bg-[#fbfaf4]',
      metaTone: 'bg-[#edf4ea]',
      closingTone: 'bg-[#f7efe6]',
    },
  },
];

const socialPosts = [
  {
    label: 'Close-up dog portrait',
    quote: 'Ready for my forever home.',
    badge: 'Campaign Post',
    accent: 'bg-peach',
    image:
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=80',
    subline: 'Still waiting. Still hopeful.',
    eyebrow: 'Portrait story',
    align: 'left',
    panelTone: 'bg-[#fff6ef]/94',
  },
  {
    label: 'Cat in warm light',
    quote: 'You don’t just adopt a pet. You give someone a second chance.',
    badge: 'Awareness Post',
    accent: 'bg-blush',
    image:
      'https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=900&q=80',
    subline: 'Soft storytelling can make people stop and care.',
    eyebrow: 'Message tile',
    align: 'center',
    panelTone: 'bg-[#fff7fb]/94',
  },
  {
    label: 'Warm rescue pet portrait',
    quote: 'One small act. One changed life.',
    badge: 'Support Post',
    accent: 'bg-peach',
    image:
      'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=900&q=80',
    subline: 'A gentle message for adoption and second chances.',
    eyebrow: 'Community story',
    align: 'right',
    panelTone: 'bg-[#fff4eb]/94',
  },
];

const palette = [
  { name: 'Cream', hex: '#fcf7f2', className: 'bg-cream' },
  { name: 'Warm Beige', hex: '#f4e9dc', className: 'bg-oat' },
  { name: 'Blush Pink', hex: '#f4dce3', className: 'bg-blush' },
  { name: 'Light Peach', hex: '#f6d9cb', className: 'bg-peach' },
  { name: 'Soft Sage', hex: '#dbe6d8', className: 'bg-sage' },
  { name: 'Pale Sky Blue', hex: '#d9eaf2', className: 'bg-sky' },
];

const outcomes = [
  'Graphic Design',
  'Social Content',
  'Campaign Thinking',
  'Storytelling for Community Impact',
];

function App() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  return (
    <div className="min-h-screen bg-glow text-ink">
      <div className="mx-auto max-w-7xl px-6 py-6 md:px-10 lg:px-12">
        <main className="overflow-hidden rounded-[2rem] border border-white/75 bg-[#fff8f3]/84 shadow-cloud backdrop-blur-sm">
          <RevealSection>
            <section className="relative isolate overflow-hidden px-6 pb-14 pt-8 md:px-10 md:pb-20 md:pt-10 lg:px-14">
            <div className="absolute -left-10 top-10 h-36 w-36 rounded-full bg-peach/45 blur-3xl" />
            <div className="absolute right-10 top-24 h-36 w-36 rounded-full bg-oat/55 blur-3xl" />
            <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
              <div className="order-2 lg:order-1">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cocoa/70">
                  Mock Campaign Project
                </p>
                <h1 className="max-w-xl font-display text-5xl leading-none text-ink md:text-[4.5rem]">
                  Adopt, Don’t Shop
                </h1>
                <p className="mt-4 max-w-xl font-display text-2xl leading-tight text-cocoa/82 md:text-[2.15rem]">
                  A Soft Adoption Campaign
                </p>
                <p className="mt-6 max-w-xl text-lg leading-8 text-ink/72 md:text-xl">
                  A soft campaign concept created to encourage pet adoption through warm
                  storytelling, social-first design, and emotionally engaging visuals.
                </p>
                <p className="mt-4 max-w-lg text-sm leading-6 text-cocoa/68">
                  A self-initiated concept exploring how design can support animal welfare
                  storytelling.
                </p>
                <a
                  href="#campaign"
                  className="mt-8 inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(69,54,47,0.10)] transition-all duration-[240ms] ease-out hover:-translate-y-0.5 hover:bg-cocoa hover:shadow-[0_14px_28px_rgba(69,54,47,0.14)]"
                >
                  See Campaign
                </a>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative mx-auto max-w-xl overflow-hidden rounded-[2rem] bg-[#f5e7db] p-3 shadow-cloud">
                  <div className="absolute -left-8 top-10 h-24 w-24 rounded-full bg-blush/70 blur-2xl" />
                  <div className="absolute -right-8 bottom-12 h-28 w-28 rounded-full bg-sage/80 blur-2xl" />
                  <img
                    src={doggyImage}
                    alt="A close-up dog portrait with gentle eye contact"
                    className="hero-breath relative h-[420px] w-full rounded-[1.6rem] object-cover object-center brightness-[.95] contrast-[1.02] saturate-[1.02] md:h-[520px]"
                  />
                </div>
              </div>
            </div>
            </section>
          </RevealSection>

          <RevealSection>
            <section className="border-t border-cocoa/8 px-6 py-14 md:px-10 md:py-16 lg:px-14">
            <SectionHeading
              eyebrow="Campaign Overview"
              title="A visual campaign presentation designed to feel personal, gentle, and easy to share."
              description="This mock project was created to explore how thoughtful design can support animal adoption, community engagement, and fundraising communication. The concept uses soft visual storytelling and simple language to help animal welfare messages feel more personal and memorable."
            />
            <div className="mt-7 flex flex-wrap gap-3">
              {overviewChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full bg-[#fff7f2] px-4 py-2 text-sm font-semibold text-cocoa shadow-card"
                >
                  {chip}
                </span>
              ))}
            </div>
            </section>
          </RevealSection>

          <RevealSection>
            <section id="campaign" className="border-t border-cocoa/8 px-6 py-14 md:px-10 md:py-16 lg:px-14">
            <SectionHeading
              eyebrow="Poster-Style Campaign Assets"
              title="Poster-style campaign assets designed to feel more like emotional storytelling pieces than standard web cards."
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {posterCards.map((card) => (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => setSelectedAnimal(card)}
                  className="group cursor-pointer overflow-hidden rounded-[2rem] bg-[#fffaf6] text-left shadow-cloud transition-all duration-[320ms] ease-out hover:-translate-y-1 hover:shadow-[0_28px_68px_rgba(143,112,92,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cocoa/30 focus-visible:ring-offset-4 focus-visible:ring-offset-cream motion-reduce:transform-none"
                  aria-label={`Open ${card.profile.name}'s story card`}
                >
                  <div className="relative min-h-[31rem]">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full min-h-[31rem] w-full object-cover saturate-[.8] brightness-[.89] contrast-[.9] transition-transform duration-[320ms] ease-out group-hover:scale-[1.02] motion-reduce:transform-none"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${card.tone}`} />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,246,239,0.22),transparent_30%,rgba(69,54,47,0.42)_100%)]" />
                    <div className="absolute inset-0 opacity-[0.07] mix-blend-multiply [background-image:linear-gradient(rgba(118,91,81,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(118,91,81,0.18)_1px,transparent_1px)] [background-size:14px_14px]" />
                    <div className="absolute left-5 top-5 rounded-full bg-white/82 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cocoa shadow-sm backdrop-blur-sm">
                      {card.stamp}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="rounded-[1.7rem] bg-[#fff8f3]/93 p-6 shadow-card">
                        <p className="font-display text-4xl leading-[0.95] text-ink">
                          {card.title}
                        </p>
                        <div className="mt-4 space-y-1 text-sm leading-6 text-ink/72">
                          {card.body.map((line) => (
                            <p key={line}>{line}</p>
                          ))}
                        </div>
                        <p className="mt-5 border-t border-cocoa/10 pt-3 text-xs font-semibold uppercase tracking-[0.18em] text-cocoa/66">
                          {card.footer}
                        </p>
                        <div className="mt-4 inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cocoa shadow-sm transition-all duration-[280ms] ease-out group-hover:bg-[#fff2ea] group-focus-visible:bg-[#fff2ea]">
                          {card.profile.cta}
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            </section>
          </RevealSection>

          <RevealSection>
            <section className="border-t border-cocoa/8 px-6 py-14 md:px-10 md:py-16 lg:px-14">
            <SectionHeading
              eyebrow="Social Media Mockups"
              title="Soft Instagram-style posts designed to feel warm, shareable, and emotionally direct."
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {socialPosts.map((post) => (
                <SocialPostCard key={post.quote} {...post} />
              ))}
            </div>
            </section>
          </RevealSection>

          <RevealSection>
            <section className="border-t border-cocoa/8 px-6 py-14 md:px-10 md:py-16 lg:px-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
              <div>
                <SectionHeading
                  eyebrow="Visual Identity"
                  title="A soft pastel system designed to feel warm, calm, and emotionally approachable."
                  description="It balances editorial elegance with gentle visual storytelling to support animal adoption messaging."
                />
                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {palette.map((swatch) => (
                    <div
                      key={swatch.name}
                      className="rounded-2xl border border-cocoa/8 bg-white p-4 shadow-card"
                    >
                      <div className={`h-24 rounded-xl ${swatch.className}`} />
                      <p className="mt-4 text-sm font-semibold text-ink">{swatch.name}</p>
                      <p className="text-sm text-ink/60">{swatch.hex}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 self-start">
                <InfoCard title="Heading Font Style" tone="bg-[#fffaf7]">
                  <p>
                    <span className="font-display text-3xl text-ink">DM Serif Display</span>
                  </p>
                  <p>
                    Used for campaign headlines and poster-style moments to create warmth,
                    softness, and emotional focus.
                  </p>
                </InfoCard>

                <InfoCard title="Body Font Style" tone="bg-[#fffaf7]">
                  <p>
                    <span className="text-lg font-semibold text-ink">Manrope</span>
                  </p>
                  <p>
                    Used for supporting copy and interface text to keep the page modern, calm, and
                    easy to scan.
                  </p>
                </InfoCard>

                <InfoCard title="Brand Keywords" tone="bg-[#f7fbfd]">
                  <div className="flex flex-wrap gap-3 pt-1">
                    {['gentle', 'hopeful', 'trustworthy'].map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full bg-oat px-4 py-2 text-sm font-semibold text-cocoa"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </InfoCard>
              </div>
            </div>
            </section>
          </RevealSection>

          <RevealSection>
            <section className="border-t border-cocoa/8 px-6 py-14 md:px-10 md:py-16 lg:px-14">
            <SectionHeading
              eyebrow="Campaign Message"
              title="A simple message approach that makes animal welfare feel more personal."
              description="This concept focuses on emotional connection, approachable design, and gentle storytelling. Instead of using loud messaging, it uses soft visuals and simple words to help people pause, feel, and care."
            />
            </section>
          </RevealSection>

          <RevealSection>
            <section className="border-t border-cocoa/8 px-6 py-14 md:px-10 md:py-16 lg:px-14">
            <SectionHeading
              eyebrow="Outcome"
              title="This mock project explores how design can support real animal adoption and community engagement."
              description="It brings together visual design, social content thinking, and storytelling to create a softer, more human campaign experience."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {outcomes.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-cocoa/8 bg-white px-5 py-5 text-base font-semibold leading-6 text-ink shadow-card"
                >
                  {item}
                </div>
              ))}
            </div>
            </section>
          </RevealSection>

          <RevealSection>
            <footer className="border-t border-cocoa/8 px-6 py-8 text-center md:px-10 lg:px-14">
            <p className="text-sm tracking-[0.18em] text-cocoa/70">
              Mock portfolio project by Flora He
            </p>
            </footer>
          </RevealSection>
        </main>
      </div>

      <AnimalStoryModal animal={selectedAnimal} onClose={() => setSelectedAnimal(null)} />
    </div>
  );
}

export default App;

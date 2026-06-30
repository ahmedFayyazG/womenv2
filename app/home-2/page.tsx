import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Asterisk, CalendarDays, Headphones, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: "Home 2 - Women's Voices",
  description:
    "A bold alternate Women's Voices homepage inspired by a colorful coaching-style long-form landing page.",
};

const stats = [
  {
    value: '70%',
    body: 'of women we support arrive carrying isolation, pressure, or uncertainty.',
    color: '#4868F6',
  },
  {
    value: '100%',
    body: 'of our groups are designed to help women feel seen, safe, and heard.',
    color: '#AD90F7',
  },
  {
    value: '12+',
    body: 'years of standing beside women across Manchester communities.',
    color: '#FF8F64',
  },
  {
    value: '4+',
    body: 'core pathways covering learning, wellbeing, skills, and leadership.',
    color: '#DC65D6',
  },
];

const signs = [
  {
    title: 'Too much on your shoulders',
    items: [
      'You are holding family, work, language, and appointments together.',
      'You keep showing up even when your own needs come last.',
      'You want a place where you can breathe and be understood.',
    ],
  },
  {
    title: 'Feeling overlooked',
    items: [
      'You have skills, ideas, and hopes but need the right support.',
      'You want to learn without judgement or pressure.',
      'You are ready for friendship, confidence, and practical next steps.',
    ],
  },
  {
    title: 'Ready for change',
    items: [
      'You want to speak up for yourself and your community.',
      'You need support that respects your culture and lived experience.',
      'You are ready to move forward with women beside you.',
    ],
  },
];

const programmes = [
  'ESOL and everyday English',
  'Wellbeing circles and peer support',
  'Employability and digital confidence',
  'Leadership, advocacy, and mentoring',
];

function PortraitCard({ className = '' }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[2px] bg-[#BDF8F1] shadow-[0_18px_38px_rgba(30,42,54,0.18)] ${className}`}>
      <Image
        src="/images/home-2-portrait.png"
        alt="Confident woman in a bright personal-brand portrait"
        width={900}
        height={1200}
        className="h-full w-full object-cover object-top"
        priority
      />
    </div>
  );
}

export default function HomeTwo() {
  return (
    <div className="w-full overflow-hidden bg-white text-[#151827]">
      <div className="w-full overflow-hidden bg-white">
        <section className="relative bg-[#40D2CA] px-5 pb-0 pt-10 text-white sm:px-10 sm:pt-14 lg:px-16 xl:px-24">
          <div className="absolute right-[-180px] top-[-130px] h-[380px] w-[380px] rounded-full bg-[#E5097F]/35 blur-3xl" />
          <div className="mx-auto grid w-full max-w-[1360px] items-center gap-8 md:grid-cols-[minmax(220px,360px)_1fr] lg:gap-14">
            <PortraitCard className="mx-auto h-[255px] w-[190px] sm:h-[340px] sm:w-[250px] md:mx-0 lg:h-[430px] lg:w-full" />
            <div className="relative z-10">
              <p className="mb-4 text-[13px] font-black uppercase tracking-[0.3em] text-white">I see you</p>
              <p className="max-w-[760px] text-[13px] font-black leading-5 text-[#151827] sm:text-[15px] sm:leading-6">
                You&apos;re a strong woman building a life, a family, and a future while carrying more than anyone sees.
              </p>
              <div className="my-7 h-px w-full bg-white/65" />
              <p className="mb-4 text-[13px] font-black uppercase tracking-[0.3em] text-white">I hear you</p>
              <p className="max-w-[820px] text-[13px] font-black leading-5 text-[#151827] sm:text-[15px] sm:leading-6">
                You&apos;re exhausted from juggling appointments, language barriers, work, children, studies, and everyone&apos;s expectations.
              </p>
              <div className="mt-7 h-px w-full bg-white/65" />
              <p className="mt-5 text-3xl font-black leading-none text-[#E8FF65] sm:text-4xl">you&apos;re not alone</p>
            </div>
          </div>

          <div className="mx-auto mt-12 grid w-full max-w-[1360px] grid-cols-2 items-end gap-0 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="flex min-h-[190px] flex-col items-center justify-center px-5 pb-8 pt-12 text-center text-white first:rounded-tl-[90px] last:rounded-tr-[90px] md:min-h-[280px] md:rounded-t-[110px] lg:min-h-[340px]"
                style={{ backgroundColor: stat.color }}
              >
                <span className="text-[48px] font-black leading-none sm:text-[64px] lg:text-[78px]">{stat.value}</span>
                <p className="mt-4 max-w-[210px] text-[11px] font-black leading-4 sm:text-[13px] sm:leading-5">{stat.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 py-14 text-center sm:px-10 lg:px-16 xl:px-24">
          <p className="text-[13px] font-black uppercase tracking-[0.28em] text-[#4868F6]">That feels heavy, right? I know.</p>
          <p className="mx-auto mt-5 max-w-[940px] text-[12px] font-bold leading-5 sm:text-[14px] sm:leading-6">
            Let&apos;s cut to the chase. The women who walk through our doors are not short on strength. They are short on
            safe space, practical support, and people who understand the whole story.
          </p>
          <h1 className="mx-auto mt-7 max-w-[980px] text-[42px] font-black leading-[0.9] text-[#D762D9] sm:text-[64px] lg:text-[86px]">
            That&apos;s why we created Women&apos;s Voices.
          </h1>
          <p className="mt-4 text-[13px] font-black uppercase tracking-[0.16em]">To flip the script for women and mums in Manchester</p>

          <div className="mx-auto mt-8 grid max-w-[1120px] gap-5 text-left md:grid-cols-2">
            {programmes.map((item) => (
              <div key={item} className="grid grid-cols-[24px_1fr] gap-3 text-[12px] font-bold leading-5">
                <Asterisk className="mt-0.5 text-[#4868F6]" size={18} />
                <p>{item}. Support that meets women where they are and helps them move forward with confidence.</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-[920px] text-[12px] font-black leading-5 sm:text-[14px] sm:leading-6">
            I firmly believe it is time for every woman to have access to friendship, learning, wellbeing, and freedom
            from isolation. Let&apos;s own our stories together.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-full bg-[#E66BCE] px-8 py-3 text-[11px] font-black uppercase tracking-[0.16em] text-white"
          >
            Ready to join Women&apos;s Voices?
          </Link>
        </section>

        <section className="px-5 pb-16 sm:px-10 lg:px-16 xl:px-24">
          <div className="mx-auto w-full max-w-[1360px] overflow-hidden rounded-[18px] bg-[#AE91F8] text-white">
            <div className="px-7 py-9 text-center">
              <h2 className="text-[36px] font-black leading-none sm:text-[54px] lg:text-[68px]">I know what it&apos;s like...</h2>
              <p className="mx-auto mt-4 max-w-[760px] text-[13px] font-black leading-5 text-[#151827] sm:text-[15px] sm:leading-6">
                You started your journey because you wanted freedom that came from running something yourself.
              </p>
              <p className="mt-5 text-[13px] font-black uppercase tracking-[0.28em]">You&apos;re...</p>
            </div>

            <div className="grid gap-0 px-7 pb-10 md:grid-cols-3 lg:px-12">
              {signs.map((sign) => (
                <article key={sign.title} className="border-white/55 py-3 md:border-r md:px-6 md:last:border-r-0 lg:px-10">
                  <h3 className="text-[15px] font-black text-[#4868F6] sm:text-[17px]">{sign.title}</h3>
                  <ul className="mt-4 space-y-4 text-[11px] font-bold leading-5 text-[#151827] sm:text-[13px] sm:leading-6">
                    {sign.items.map((item) => (
                      <li key={item}>x {item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="bg-[#DDD4FF] px-6 py-5 text-center text-[13px] font-black uppercase tracking-[0.28em] text-[#4868F6]">
              No judgment here friend.
            </div>
          </div>
        </section>

        <section className="px-5 pb-16 sm:px-10 lg:px-16 xl:px-24">
          <h2 className="mx-auto max-w-[1120px] text-center text-[42px] font-black leading-[0.93] text-[#4868F6] sm:text-[64px] lg:text-[82px]">
            I see you, I&apos;ve been you, and I&apos;ve got the community you&apos;ve been craving.
          </h2>

          <div className="mx-auto mt-12 grid max-w-[1360px] gap-10 md:grid-cols-[1fr_minmax(280px,460px)] lg:gap-16">
            <div className="space-y-8">
              <div>
                <p className="text-[14px] font-black uppercase tracking-[0.24em] text-[#4868F6]">It is time to rewrite your story</p>
                <p className="mt-3 text-[12px] font-bold leading-5 sm:text-[14px] sm:leading-6">
                  We know rebuilding confidence after isolation, migration, caring demands, or discrimination can feel
                  impossible. Our programmes help women reclaim their voice one practical step at a time.
                </p>
              </div>
              <div>
                <p className="text-[14px] font-black uppercase tracking-[0.24em] text-[#4868F6]">Step into your power</p>
                <p className="mt-3 text-[12px] font-bold leading-5 sm:text-[14px] sm:leading-6">
                  Imagine a world where you are supported by women who understand your life, your language, your goals,
                  and your courage. That is the world we build every week.
                </p>
              </div>
              <div>
                <p className="text-[14px] font-black uppercase tracking-[0.24em] text-[#4868F6]">Book your breakthrough session now</p>
                <ul className="mt-3 space-y-2 text-[12px] font-bold leading-5 sm:text-[14px] sm:leading-6">
                  <li>x Find the right group for your needs.</li>
                  <li>x Meet women who understand your experience.</li>
                  <li>x Leave with one clear next step.</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <PortraitCard className="h-[270px] w-full rounded-[18px] sm:h-[360px] lg:h-[460px]" />
              <div className="relative h-[210px] overflow-hidden rounded-[18px] bg-[#AEEAF7] sm:h-[280px]">
                <div className="absolute bottom-5 left-1/2 h-[70px] w-[160px] -translate-x-1/2 rounded-full bg-[#E8FF65]" />
                <div className="absolute bottom-16 left-1/2 h-[78px] w-[44px] -translate-x-1/2 rotate-[-18deg] rounded-t-full bg-[#FF4DB8]" />
                <div className="absolute bottom-20 left-[54%] h-[18px] w-[92px] rounded-full bg-[#D9A521]" />
                <div className="absolute bottom-7 left-1/2 h-[22px] w-[150px] -translate-x-1/2 rounded bg-[#4868F6]" />
                <div className="absolute bottom-3 left-1/2 h-[20px] w-[135px] -translate-x-1/2 rounded bg-[#FF8F64]" />
              </div>
            </div>
          </div>
        </section>

        <section className="grid bg-[#F9EEF7] md:grid-cols-[minmax(280px,42vw)_1fr]">
          <PortraitCard className="min-h-[360px] rounded-none shadow-none md:min-h-[620px]" />
          <div className="px-5 py-12 sm:px-10 lg:px-16 xl:px-24">
            <p className="text-[12px] font-black uppercase tracking-[0.28em] text-[#40D2CA]">The movement</p>
            <h2 className="mt-4 max-w-[780px] text-[46px] font-black leading-[0.9] text-[#D762D9] sm:text-[68px] lg:text-[88px]">
              Now we rewrite the rules together.
            </h2>
            <p className="mt-6 max-w-[820px] text-[13px] font-bold leading-6 sm:text-[15px]">
              Women&apos;s Voices is a place to learn, heal, connect, and lead. It is practical, warm, direct, and built
              around the reality of women&apos;s lives.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link className="inline-flex items-center justify-center gap-2 rounded-full bg-[#40D2CA] px-6 py-3 text-[11px] font-black uppercase tracking-[0.16em] text-white" href="/contact">
                Join now <ArrowRight size={14} />
              </Link>
              <Link className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D762D9] px-6 py-3 text-[11px] font-black uppercase tracking-[0.16em] text-[#D762D9]" href="/events">
                See events <CalendarDays size={14} />
              </Link>
            </div>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-10 lg:px-16 xl:px-24">
          <div className="mx-auto grid max-w-[1360px] gap-6 md:grid-cols-2">
            <article className="rounded-[18px] bg-[#40D2CA] p-7 text-white sm:p-10">
              <Headphones size={30} />
              <h3 className="mt-6 text-3xl font-black leading-none sm:text-5xl">Listen, learn, belong.</h3>
              <p className="mt-4 text-[12px] font-bold leading-5 text-[#151827]">
                Join conversations that build confidence and reduce isolation.
              </p>
            </article>
            <article className="rounded-[18px] bg-[#E8FF65] p-7 text-[#151827] sm:p-10">
              <Sparkles size={30} />
              <h3 className="mt-6 text-3xl font-black leading-none text-[#4868F6] sm:text-5xl">Your next step starts here.</h3>
              <p className="mt-4 text-[12px] font-bold leading-5">
                Tell us what support you need and we&apos;ll help you find the right place to begin.
              </p>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}

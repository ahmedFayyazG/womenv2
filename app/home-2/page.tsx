import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CalendarDays, GraduationCap, HeartHandshake, MessageCircleHeart, UsersRound } from 'lucide-react';
import AwardStrip from '@/components/sections/AwardStrip';
import BlogSection from '@/components/sections/BlogSection';
import CommunityCta from '@/components/sections/CommunityCta';
import PartnersBar from '@/components/sections/PartnersBar';
import TestimonialsSlider from '@/components/sections/TestimonialsSlider';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import { SERVICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: "Home 2 - Women's Voices",
  description:
    "An alternate Women's Voices homepage focused on community support, learning, wellbeing, and leadership for women in Manchester.",
};

const impactStats = [
  { value: '500+', label: 'women supported' },
  { value: '12+', label: 'years serving communities' },
  { value: '20+', label: 'weekly activities' },
];

const featureCards = [
  {
    title: 'Safe spaces to belong',
    body: 'Women connect through welcoming groups, peer support, creative sessions, and wellbeing activities.',
    icon: HeartHandshake,
  },
  {
    title: 'Skills for everyday life',
    body: 'Accessible ESOL, digital skills, employability support, and confidence-building sessions.',
    icon: GraduationCap,
  },
  {
    title: 'Voices that influence change',
    body: 'Leadership, advocacy, and mentoring help women shape stronger families and communities.',
    icon: MessageCircleHeart,
  },
];

export default function HomeTwo() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#10151D] text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(229,9,127,0.84),rgba(53,195,214,0.66)),radial-gradient(circle_at_75%_20%,rgba(217,165,33,0.35),transparent_32%),linear-gradient(135deg,#1b102a,#102a35)]" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#10151D] to-transparent" />
        </div>

        <div className="section-shell relative grid min-h-[78vh] items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div className="max-w-3xl">
            <Eyebrow color="white">Women-led community support in Manchester</Eyebrow>
            <h1 className="max-w-4xl text-[42px] font-semibold leading-[1.03] text-white sm:text-[56px] lg:text-[68px]">
              Helping every woman feel heard, skilled, and connected.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/86">
              Women&apos;s Voices supports refugee, asylum-seeking, migrant, and minoritised women through education,
              wellbeing, advocacy, and leadership development.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="solid-cyan">Get support</Button>
              <Button href="/about" variant="outline-white">About us</Button>
            </div>
          </div>

          <div className="grid gap-4 rounded-[28px] border border-white/18 bg-white/12 p-5 shadow-2xl backdrop-blur-md">
            <div className="rounded-[22px] bg-white p-6 text-[#2D2A35]">
              <div className="flex items-center gap-3 text-[#E5097F]">
                <UsersRound size={28} />
                <span className="text-sm font-bold uppercase tracking-[0.18em]">Community impact</span>
              </div>
              <div className="mt-6 grid gap-4">
                {impactStats.map((stat) => (
                  <div key={stat.label} className="flex items-end justify-between border-b border-[#F0E8F1] pb-4 last:border-0 last:pb-0">
                    <span className="text-[40px] font-semibold leading-none text-[#5B2D8E]">{stat.value}</span>
                    <span className="max-w-[150px] text-right text-sm font-semibold uppercase tracking-wider text-[#5A5663]">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link
              href="/events"
              className="group flex items-center justify-between rounded-[22px] bg-[#D9A521] px-5 py-4 text-[#20242E] transition-transform hover:-translate-y-1"
            >
              <span className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider">
                <CalendarDays size={20} />
                Upcoming events
              </span>
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
            </Link>
          </div>
        </div>
      </section>

      <AwardStrip />

      <section className="bg-white py-16 lg:py-20">
        <div className="section-shell">
          <div className="max-w-2xl">
            <Eyebrow>What we offer</Eyebrow>
            <h2 className="text-4xl font-semibold leading-tight text-[#2D2A35] sm:text-5xl">
              Practical support shaped around women&apos;s real lives.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {featureCards.map(({ title, body, icon: Icon }) => (
              <article key={title} className="rounded-[24px] border border-[#EEE7EF] bg-[#FDFBFD] p-6">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E5097F]/10 text-[#E5097F]">
                  <Icon size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-[#2D2A35]">{title}</h3>
                <p className="mt-3 leading-7 text-[#5A5663]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F1EA] py-16 lg:py-20">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Eyebrow color="cyan">Programmes</Eyebrow>
              <h2 className="text-4xl font-semibold leading-tight text-[#2D2A35] sm:text-5xl">
                Routes into confidence, independence, and leadership.
              </h2>
            </div>
            <Button href="/contact" variant="outline-dark">Join a programme</Button>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {SERVICES.map((service) => (
              <article key={service.id} className="rounded-[24px] bg-white p-6 shadow-sm">
                <div className="mb-5 h-2 w-20 rounded-full" style={{ backgroundColor: service.iconColor }} />
                <h3 className="text-2xl font-semibold text-[#2D2A35]">{service.title}</h3>
                <p className="mt-3 leading-7 text-[#5A5663]">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PartnersBar />
      <TestimonialsSlider />
      <CommunityCta />
      <BlogSection />
    </>
  );
}

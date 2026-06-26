import HeroSlider from '@/components/sections/HeroSlider';
import AwardStrip from '@/components/sections/AwardStrip';
import ServicesGrid from '@/components/sections/ServicesGrid';
import CommunityCta from '@/components/sections/CommunityCta';
import PartnersBar from '@/components/sections/PartnersBar';
import MissionTabs from '@/components/sections/MissionTabs';
import VolunteerAccordion from '@/components/sections/VolunteerAccordion';
import TestimonialsSlider from '@/components/sections/TestimonialsSlider';
import BlogSection from '@/components/sections/BlogSection';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AwardStrip />
      <ServicesGrid />
      <CommunityCta />
      <PartnersBar />
      <MissionTabs />
      <VolunteerAccordion />
      <TestimonialsSlider />
      <BlogSection />
    </>
  );
}

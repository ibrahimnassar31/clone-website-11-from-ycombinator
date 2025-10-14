import NavigationBar from '../components/sections/navigation-bar';
import HeroSection from '@/components/sections/hero-section';
import MouseModelsSection from '@/components/sections/mouse-models-section';
import ExperienceSection from '@/components/sections/experience-section';
import DiseaseModelsSection from '@/components/sections/disease-models-section';
import TeamSection from '@/components/sections/team-section';
import ServicesSection from '@/components/sections/services-section';
import CommitmentsSection from '@/components/sections/commitments-section';
import PublicationsSection from '@/components/sections/publications-section';
import CtaSection from '@/components/sections/cta-section';
import Footer from '@/components/sections/footer';

export default function HomePage() {
  return (
    <>
      <NavigationBar />
      <main className="min-h-screen pt-20 bg-gradient-to-br from-purple-50 via-white to-purple-100">
        <HeroSection />
        <MouseModelsSection />
        <ExperienceSection />
        <DiseaseModelsSection />
        <TeamSection />
        <ServicesSection />
        <CommitmentsSection />
        <PublicationsSection />
        <CtaSection />
        <Footer />
      </main>
    </>
  );
}
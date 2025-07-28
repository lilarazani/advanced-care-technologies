import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import NumbersSection from "@/components/NumbersSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutSection from "@/components/AboutSection";
import PartnershipsSection from "@/components/PartnershipsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <MissionSection />
      <NumbersSection />
      <SolutionSection />
      <HowItWorksSection />
      <AboutSection />
      <PartnershipsSection />
    </div>
  );
};

export default Index;
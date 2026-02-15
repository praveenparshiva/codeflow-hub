import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AbstractSection from "@/components/sections/AbstractSection";
import ProjectOverview from "@/components/sections/ProjectOverview";
import ComparisonSection from "@/components/sections/ComparisonSection";
import TechStack from "@/components/sections/TechStack";
import TeamSection from "@/components/sections/TeamSection";
import CodeEditorSection from "@/components/sections/CodeEditorSection";
import ChatSection from "@/components/sections/ChatSection";
import DocumentationSection from "@/components/sections/DocumentationSection";
import DemoSection from "@/components/sections/DemoSection";
import ConclusionSection from "@/components/sections/ConclusionSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AbstractSection />
      <ProjectOverview />
      <ComparisonSection />
      <TechStack />
      <TeamSection />
      <CodeEditorSection />
      <ChatSection />
      <DocumentationSection />
      <DemoSection />
      <ConclusionSection />
      <Footer />
    </main>
  );
};

export default Index;

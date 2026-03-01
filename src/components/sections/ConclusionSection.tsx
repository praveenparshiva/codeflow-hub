import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ConclusionSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-28 px-4">
      <div ref={ref} className="section-animate max-w-3xl mx-auto">
        <div className="dark-card p-10 sm:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />
          <div className="relative">
            <h2 className="section-heading mb-6">
              <span className="gradient-text">Conclusion</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              CodeFlow transforms traditional development and communication workflows into a unified cloud-native experience.
              By combining coding, collaboration, and intelligent academic assistance into a single ecosystem, it enhances
              productivity, accessibility, and modern learning methodologies for developers worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;

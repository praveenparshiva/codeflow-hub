import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ConclusionSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-24 px-4">
      <div ref={ref} className="section-animate max-w-3xl mx-auto">
        <div
          className="rounded-2xl p-10 sm:p-14 text-center"
          style={{
            background: "linear-gradient(135deg, hsl(var(--primary) / 0.2), hsl(var(--accent) / 0.15))",
            border: "1px solid hsl(var(--border) / 0.5)",
          }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="gradient-text">Conclusion</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            CodeFlow transforms traditional development and communication workflows into a unified cloud-native experience.
            By combining coding, collaboration, and intelligent academic assistance into a single ecosystem, it enhances
            productivity, accessibility, and modern learning methodologies for developers worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;

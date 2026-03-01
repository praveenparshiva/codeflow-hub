import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X, Check } from "lucide-react";

const existing = [
  "Requires local installations",
  "OS compatibility issues",
  "Multiple disconnected platforms",
  "Manual setup of compilers",
  "Poor collaboration integration",
];

const proposed = [
  "Fully browser-based",
  "Cloud execution environment",
  "Integrated chat + coding",
  "Scalable and secure architecture",
  "Social networking for developers",
];

const ComparisonSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-28 px-4">
      <div ref={ref} className="section-animate max-w-5xl mx-auto">
        <h2 className="section-heading text-center mb-4">
          <span className="gradient-text">Existing vs Proposed</span>
        </h2>
        <p className="section-subtext text-center mb-16">Why CodeFlow is the better approach</p>

        <div className="grid md:grid-cols-2 gap-0 dark-card overflow-hidden">
          {/* Existing */}
          <div className="p-8 sm:p-10 border-b md:border-b-0 md:border-r border-border">
            <h3 className="text-lg font-bold text-destructive mb-6 flex items-center gap-2">
              <X className="w-5 h-5" /> Existing System
            </h3>
            <ul className="space-y-4">
              {existing.map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive/60 shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Proposed */}
          <div className="p-8 sm:p-10">
            <h3 className="text-lg font-bold text-success mb-6 flex items-center gap-2">
              <Check className="w-5 h-5" /> Proposed System
            </h3>
            <ul className="space-y-4">
              {proposed.map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-success/60 shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

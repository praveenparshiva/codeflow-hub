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
    <section className="py-24 px-4">
      <div ref={ref} className="section-animate max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          <span className="gradient-text">Existing vs Proposed System</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Existing */}
          <div className="glass-card p-8 border-destructive/30">
            <h3 className="text-xl font-bold text-destructive mb-6">Existing System</h3>
            <ul className="space-y-4">
              {existing.map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <X className="w-5 h-5 text-destructive shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Proposed */}
          <div className="glass-card p-8 border-success/30">
            <h3 className="text-xl font-bold text-success mb-6">Proposed System</h3>
            <ul className="space-y-4">
              {proposed.map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-success shrink-0" />
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

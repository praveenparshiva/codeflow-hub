import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FileText } from "lucide-react";

const DocumentationSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-24 px-4">
      <div ref={ref} className="section-animate max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          <span className="gradient-text">Project Documentation</span>
        </h2>

        <div className="glass-card p-12">
          <FileText className="w-16 h-16 text-primary mx-auto mb-6" />
          <p className="text-muted-foreground mb-8">
            Access the complete project documentation including system design, architecture diagrams, and implementation details.
          </p>
          <a
            href="/CodeFlow.pdf"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
              color: "hsl(var(--primary-foreground))",
            }}
          >
            📄 View Full Project Documentation (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default DocumentationSection;

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Palette, Languages, Save, Terminal, Sparkles } from "lucide-react";

const features = [
  { icon: Sparkles, label: "Syntax Highlighting" },
  { icon: Languages, label: "Multi-Language Support" },
  { icon: Save, label: "Auto-Save Functionality" },
  { icon: Terminal, label: "Terminal-Style Output" },
  { icon: Palette, label: "Theme Customization" },
];

const codeSnippet = `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 55`;

const CodeEditorSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-24 px-4">
      <div ref={ref} className="section-animate max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          <span className="gradient-text">Code Editor Deep Dive</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Code mockup */}
          <div className="glass-card overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
              <span className="w-3 h-3 rounded-full bg-destructive/70" />
              <span className="w-3 h-3 rounded-full bg-accent/70" />
              <span className="w-3 h-3 rounded-full bg-success/70" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">main.js</span>
            </div>
            <pre className="p-6 text-xs sm:text-sm font-mono text-muted-foreground overflow-x-auto leading-relaxed">
              <code>{codeSnippet}</code>
            </pre>
            <div className="px-4 py-3 border-t border-border/50 font-mono text-xs text-success">
              &gt; Output: 55
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-col justify-center space-y-4">
            {features.map((f) => (
              <div key={f.label} className="glass-card p-4 flex items-center gap-4 hover:scale-[1.02] transition-transform">
                <f.icon className="w-6 h-6 text-accent shrink-0" />
                <span className="text-sm text-foreground font-medium">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeEditorSection;

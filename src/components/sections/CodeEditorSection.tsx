import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Palette, Languages, Save, Terminal, Sparkles } from "lucide-react";

const features = [
  { icon: Sparkles, label: "Syntax Highlighting", desc: "Rich color-coded syntax for all supported languages" },
  { icon: Languages, label: "Multi-Language Support", desc: "10+ programming languages with auto-detection" },
  { icon: Save, label: "Auto-Save", desc: "Never lose your work with persistent cloud storage" },
  { icon: Terminal, label: "Terminal Output", desc: "Integrated terminal panel for real-time execution results" },
  { icon: Palette, label: "Theme Customization", desc: "Dark and light themes with customizable preferences" },
];

const codeLines = [
  { num: 1, text: "function fibonacci(n) {" },
  { num: 2, text: "  if (n <= 1) return n;" },
  { num: 3, text: "  return fibonacci(n - 1)" },
  { num: 4, text: "       + fibonacci(n - 2);" },
  { num: 5, text: "}" },
  { num: 6, text: "" },
  { num: 7, text: "console.log(fibonacci(10));" },
];

const CodeEditorSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-28 px-4">
      <div ref={ref} className="section-animate max-w-6xl mx-auto">
        <h2 className="section-heading text-center mb-4">
          <span className="gradient-text">Code Editor Deep Dive</span>
        </h2>
        <p className="section-subtext text-center mb-16">A powerful, browser-based coding experience</p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Code mockup */}
          <div className="dark-card overflow-hidden">
            {/* Tab bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card">
              <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-accent/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-success/50" />
              <div className="ml-3 flex gap-0">
                <span className="px-3 py-1 text-xs text-foreground font-mono bg-background rounded-t border-t border-x border-border">main.js</span>
                <span className="px-3 py-1 text-xs text-muted-foreground/50 font-mono">utils.js</span>
              </div>
            </div>

            {/* Code */}
            <div className="p-5 font-mono text-sm leading-7">
              {codeLines.map((line) => (
                <div key={line.num} className="flex">
                  <span className="w-6 text-right mr-4 text-muted-foreground/30 select-none text-xs leading-7">{line.num}</span>
                  <span className="text-muted-foreground">{line.text || "\u00A0"}</span>
                </div>
              ))}
            </div>

            {/* Terminal */}
            <div className="border-t border-border px-4 py-3 bg-background/50 font-mono text-xs">
              <span className="text-muted-foreground/50">Terminal</span>
              <div className="mt-1 text-success">$ node main.js → 55</div>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-col justify-center space-y-3">
            {features.map((f) => (
              <div key={f.label} className="dark-card p-4 flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <f.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-sm text-foreground font-medium">{f.label}</span>
                  <p className="text-xs text-muted-foreground mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeEditorSection;

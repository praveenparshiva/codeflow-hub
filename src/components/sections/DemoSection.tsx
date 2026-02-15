import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Play, Mic } from "lucide-react";

const DemoSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="demo" className="py-24 px-4">
      <div ref={ref} className="section-animate max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          <span className="gradient-text">Demo</span>
        </h2>

        <div className="flex justify-center">
          {/* Audio */}
          <div className="glass-card p-8 text-center max-w-2xl w-full">
            <Mic className="w-12 h-12 text-accent mx-auto mb-4" />

            <h3 className="font-semibold text-foreground mb-2">
              Audio Explanation
            </h3>

            <p className="text-sm text-muted-foreground mb-6">
              Listen to a detailed explanation of the CodeFlow project.
            </p>

            <div className="rounded-xl bg-muted/50 border border-border/50 p-6">
              <audio controls className="w-full">
                <source src="/voice.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;

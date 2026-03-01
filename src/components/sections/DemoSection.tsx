import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Play, Mic } from "lucide-react";

const DemoSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="demo" className="py-28 px-4">
      <div ref={ref} className="section-animate max-w-5xl mx-auto">
        <h2 className="section-heading text-center mb-4">
          <span className="gradient-text">Demo</span>
        </h2>
        <p className="section-subtext text-center mb-16">See and hear CodeFlow in action</p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Video placeholder */}
          <div className="dark-card p-8 text-center group">
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Play className="w-6 h-6 text-primary ml-0.5" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Project Demo Video</h3>
            <p className="text-sm text-muted-foreground mb-6">Watch a walkthrough of the CodeFlow platform.</p>
            <div className="rounded-lg bg-muted/30 border border-border aspect-video flex items-center justify-center">
              <span className="text-xs text-muted-foreground/50 font-mono">Video embed placeholder</span>
            </div>
          </div>

          {/* Audio */}
          <div className="dark-card p-8 text-center group">
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <Mic className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Audio Explanation</h3>
            <p className="text-sm text-muted-foreground mb-6">Listen to a detailed project walkthrough.</p>
            <div className="rounded-lg bg-muted/30 border border-border p-5">
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

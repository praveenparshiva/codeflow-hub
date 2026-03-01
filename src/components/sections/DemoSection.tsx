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

        <p className="section-subtext text-center mb-16">
          See and hear CodeFlow in action
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* PPT SECTION (Embedded Viewer) */}
          <div className="dark-card p-8 text-center group">
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Play className="w-6 h-6 text-primary ml-0.5" />
            </div>

            <h3 className="font-semibold text-foreground mb-2">
              Project Presentation (PPT)
            </h3>

            <p className="text-sm text-muted-foreground mb-6">
              View the CodeFlow project presentation slides.
            </p>

            <div className="rounded-lg bg-muted/30 border border-border aspect-video overflow-hidden">
              <iframe
                src="https://view.officeapps.live.com/op/embed.aspx?src=https://codeflowblog.netlify.app/DemoPresentation.pptx"
                title="Project Presentation PPT"
                className="w-full h-full"
              />
            </div>

            <div className="mt-5">
              <a
                href="/Presentation.pptx"
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium hover:bg-muted transition"
              >
                Download PPT
              </a>
            </div>
          </div>

          {/* AUDIO SECTION (Unchanged) */}
          <div className="dark-card p-8 text-center group">
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <Mic className="w-6 h-6 text-accent" />
            </div>

            <h3 className="font-semibold text-foreground mb-2">
              Audio Explanation
            </h3>

            <p className="text-sm text-muted-foreground mb-6">
              Listen to a detailed project walkthrough.
            </p>

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

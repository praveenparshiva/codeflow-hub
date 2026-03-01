import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Code, MessageSquare, Keyboard, Bot } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Authentication System",
    desc: "Secure signup/login with JWT & httpOnly cookies, profile onboarding, and role-based access.",
  },
  {
    icon: Code,
    title: "Multi-Language Code Editor",
    desc: "Monaco Editor with 10+ languages, cloud execution via API, and persistent code storage.",
  },
  {
    icon: MessageSquare,
    title: "Real-Time Chat System",
    desc: "1-on-1 & group messaging, friend requests, video calling, and smart user recommendations.",
  },
  {
    icon: Keyboard,
    title: "Type Speed Test",
    desc: "Real-time WPM tracking, accuracy monitoring, and anti-cheating mechanism.",
  },
  {
    icon: Bot,
    title: "AI Academic ChatBot",
    desc: "Programming assistance, debugging help, and intelligent learning support.",
  },
];

const ProjectOverview = () => {
  const ref = useScrollAnimation();

  return (
    <section id="overview" className="py-28 px-4">
      <div ref={ref} className="section-animate max-w-6xl mx-auto">
        <h2 className="section-heading text-center mb-4">
          <span className="gradient-text">Project Overview</span>
        </h2>
        <p className="section-subtext text-center mb-16">
          Five core modules powering the CodeFlow ecosystem
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="dark-card p-7 group"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Code, MessageSquare, Keyboard, Bot } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Authentication System",
    color: "text-primary",
    items: ["Secure Signup/Login", "JWT & httpOnly cookies", "Profile onboarding"],
  },
  {
    icon: Code,
    title: "Multi-Language Code Editor",
    color: "text-accent",
    items: ["10 Programming Languages", "Monaco Editor Integration", "Cloud Execution via API", "Persistent Code Storage"],
  },
  {
    icon: MessageSquare,
    title: "Real-Time Chat System",
    color: "text-primary",
    items: ["1-1 & Group Messaging", "Friend Requests", "Video Calling", "User Recommendations"],
  },
  {
    icon: Keyboard,
    title: "Type Speed Test",
    color: "text-accent",
    items: ["Real-time WPM Tracking", "Accuracy Monitoring", "Anti-cheating Mechanism"],
  },
  {
    icon: Bot,
    title: "AI Academic ChatBot",
    color: "text-primary",
    items: ["Programming Assistance", "Debugging Help", "Learning Support"],
  },
];

const ProjectOverview = () => {
  const ref = useScrollAnimation();

  return (
    <section id="overview" className="py-24 px-4">
      <div ref={ref} className="section-animate max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Project Overview</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Five core modules powering the CodeFlow ecosystem
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glass-card p-6 hover:scale-105 transition-transform duration-300 group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="mb-4">
                <f.icon className={`w-10 h-10 ${f.color} group-hover:scale-110 transition-transform`} />
              </div>
              <h3 className="font-semibold text-sm mb-3 text-foreground">{f.title}</h3>
              <ul className="space-y-1.5">
                {f.items.map((item) => (
                  <li key={item} className="text-xs text-muted-foreground flex items-start gap-1.5">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;

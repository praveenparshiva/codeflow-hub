import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Key, Hash, MessageCircle, Video } from "lucide-react";

const chatFeatures = [
  {
    icon: Key,
    title: "Secure Token Generation",
    desc: "JWT-based authentication tokens for secure real-time communication channels.",
  },
  {
    icon: Hash,
    title: "Unique Channel Creation",
    desc: "Dynamic channel creation logic for 1-on-1 and group conversations.",
  },
  {
    icon: MessageCircle,
    title: "Threaded Messaging",
    desc: "Organized threaded replies for structured developer discussions.",
  },
  {
    icon: Video,
    title: "Video Call Integration",
    desc: "Seamless video calling links for face-to-face collaboration.",
  },
];

const ChatSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-24 px-4">
      <div ref={ref} className="section-animate max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          <span className="gradient-text">Real-Time Chat System</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {chatFeatures.map((f) => (
            <div key={f.title} className="glass-card p-8 hover:scale-[1.02] transition-transform duration-300">
              <f.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChatSection;

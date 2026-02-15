import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const members = [
  {
    name: "Praveen Kumar M",
    role: "Backend & Authentication",
    contributions: ["Backend architecture", "Authentication & JWT", "Database schema design"],
    initials: "PK",
  },
  {
    name: "Suhas H D",
    role: "Frontend & UI/UX",
    contributions: ["UI/UX design", "Frontend development", "Responsive dashboard"],
    initials: "SH",
  },
  {
    name: "Sangamesh C",
    role: "Real-Time Chat & Stream",
    contributions: ["Real-time chat integration", "Stream SDK setup", "Video calling feature"],
    initials: "SC",
  },
  {
    name: "Akash R",
    role: "Code Editor & Cloud Execution",
    contributions: ["Code Editor integration", "Piston API connection", "Language runtime config"],
    initials: "AR",
  },
];

const TeamSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="team" className="py-24 px-4">
      <div ref={ref} className="section-animate max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          <span className="gradient-text">Our Team</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m) => (
            <div key={m.name} className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300">
              {/* Avatar */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-border flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
                  <span className="gradient-text font-bold text-lg">{m.initials}</span>
                </div>
              </div>

              <h3 className="font-semibold text-foreground text-sm">{m.name}</h3>
              <p className="text-xs text-accent mb-4 font-mono">{m.role}</p>

              <ul className="space-y-1.5 text-left">
                {m.contributions.map((c) => (
                  <li key={c} className="text-xs text-muted-foreground flex items-start gap-1.5">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                    {c}
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

export default TeamSection;

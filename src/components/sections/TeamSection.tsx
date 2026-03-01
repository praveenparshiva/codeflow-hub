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
    <section id="team" className="py-28 px-4">
      <div ref={ref} className="section-animate max-w-5xl mx-auto">
        <h2 className="section-heading text-center mb-4">
          <span className="gradient-text">Our Team</span>
        </h2>
        <p className="section-subtext text-center mb-16">The people behind CodeFlow</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m) => (
            <div key={m.name} className="dark-card p-6 text-center group">
              {/* Avatar */}
              <div className="w-14 h-14 mx-auto mb-5 rounded-full gradient-border flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
                  <span className="gradient-text font-bold text-sm">{m.initials}</span>
                </div>
              </div>

              <h3 className="font-semibold text-foreground text-sm">{m.name}</h3>
              <p className="text-xs text-primary/80 mb-4 font-mono mt-1">{m.role}</p>

              <ul className="space-y-1.5 text-left">
                {m.contributions.map((c) => (
                  <li key={c} className="text-xs text-muted-foreground flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/50 shrink-0" />
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

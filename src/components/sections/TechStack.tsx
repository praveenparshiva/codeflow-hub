import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categories = [
  {
    title: "Frontend",
    items: [
      { name: "Next.js", icon: "▲" },
      { name: "React", icon: "⚛" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Monaco Editor", icon: "📝" },
      { name: "TypeScript", icon: "TS" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "⚡" },
      { name: "MongoDB", icon: "🍃" },
    ],
  },
  {
    title: "Integrations",
    items: [
      { name: "Stream Chat SDK", icon: "💬" },
      { name: "Cloud Code Exec API", icon: "☁️" },
    ],
  },
];

const TechStack = () => {
  const ref = useScrollAnimation();

  return (
    <section id="tech" className="py-28 px-4">
      <div ref={ref} className="section-animate max-w-5xl mx-auto">
        <h2 className="section-heading text-center mb-4">
          <span className="gradient-text">Technology Stack</span>
        </h2>
        <p className="section-subtext text-center mb-16">Built with modern, production-grade tools</p>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="dark-card p-7">
              <h3 className="font-bold text-foreground mb-1">{cat.title}</h3>
              <div className="w-10 h-0.5 bg-primary/40 mb-6" />
              <div className="space-y-3">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-muted/50 transition-colors group cursor-default"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">{item.icon}</span>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

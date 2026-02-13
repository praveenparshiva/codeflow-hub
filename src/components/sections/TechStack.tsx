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
    <section id="tech" className="py-24 px-4">
      <div ref={ref} className="section-animate max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          <span className="gradient-text">Technology Stack</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div key={cat.title} className="glass-card p-8">
              <h3 className="font-bold text-lg text-foreground mb-6 text-center">{cat.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-muted/50 transition-colors hover:scale-105 duration-200 cursor-default"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-xs text-muted-foreground font-medium text-center">{item.name}</span>
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

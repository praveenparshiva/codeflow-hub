import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AbstractSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="abstract" className="py-24 px-4">
      <div ref={ref} className="section-animate max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          <span className="gradient-text">Abstract</span>
        </h2>
        <div className="glass-card p-8 sm:p-12">
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            CodeFlow is a fully web-based development and communication platform that combines a multi-language online
            code editor with a real-time chat system. The platform allows users to write, compile, and execute programs
            directly in the browser using cloud-based execution services, while simultaneously enabling structured social
            interaction through real-time messaging and video communication. Built using Next.js, React, Monaco Editor,
            Node.js, MongoDB, and Stream Chat SDK, CodeFlow eliminates traditional setup complexity and promotes
            collaborative learning, productivity, and seamless developer interaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AbstractSection;

import CodeFlowLogo from "../CodeFlowLogo";

const team = ["Praveen Kumar M", "Suhas H D", "Sangamesh C", "Akash R"];

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
    {/* Background glow */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[128px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
    </div>

    <div className="relative text-center max-w-4xl mx-auto">
      <div className="flex justify-center mb-8 animate-float">
        <CodeFlowLogo className="w-20 h-20 sm:w-24 sm:h-24" />
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-4 leading-tight" style={{ animationDelay: "0.2s" }}>
        <span className="gradient-text">CodeFlow</span>
        <br />
        <span className="text-foreground text-2xl sm:text-3xl md:text-4xl font-semibold">Platform for Developers</span>
      </h1>

      <p className="text-accent font-mono text-sm sm:text-base mb-4 tracking-wider uppercase">
        A Cloud-Based Coding & Real-Time Collaboration Ecosystem
      </p>

      <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
        CodeFlow is a modern web-based platform that integrates a multi-language online code editor with a real-time chat
        and social networking system, eliminating the need for local installations and enabling seamless collaboration.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {team.map((name) => (
          <span key={name} className="glass-card px-4 py-2 text-xs sm:text-sm text-muted-foreground">
            {name}
          </span>
        ))}
      </div>

      <a
        href="#overview"
        className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
        style={{
          background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
          color: "hsl(var(--primary-foreground))",
        }}
      >
        Explore Project
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 12l-1.4-1.4L9.2 8H2V6h7.2L6.6 3.4 8 2l6 6-6 6z" />
        </svg>
      </a>
    </div>
  </section>
);

export default HeroSection;

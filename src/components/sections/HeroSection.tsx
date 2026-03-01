import CodeFlowLogo from "../CodeFlowLogo";

const codeLines = [
  { num: 1, content: '<span class="text-primary">import</span> { CodeFlow } <span class="text-primary">from</span> <span class="text-accent">"@codeflow/sdk"</span>;' },
  { num: 2, content: "" },
  { num: 3, content: '<span class="text-primary">const</span> <span class="text-accent">editor</span> = CodeFlow.<span class="text-foreground">createEditor</span>({' },
  { num: 4, content: '  language: <span class="text-accent">"typescript"</span>,' },
  { num: 5, content: '  theme: <span class="text-accent">"dark"</span>,' },
  { num: 6, content: '  autoSave: <span class="text-primary">true</span>,' },
  { num: 7, content: "});" },
  { num: 8, content: "" },
  { num: 9, content: '<span class="text-muted-foreground">// Real-time collaboration ready</span>' },
  { num: 10, content: 'editor.<span class="text-foreground">connect</span>(<span class="text-accent">"room-42"</span>);' },
];

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
    {/* Background glows */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[140px] animate-glow-pulse" style={{ animationDelay: "2s" }} />
    </div>

    <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left - Content */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <CodeFlowLogo className="w-10 h-10" />
          <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">CodeFlow Platform</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
          <span className="gradient-text">CodeFlow</span>
        </h1>

        <p className="text-xl sm:text-2xl text-foreground/80 font-medium mb-4">
          A Modern Collaborative Platform for Developers
        </p>

        <p className="text-muted-foreground text-base sm:text-lg max-w-xl mb-10 leading-relaxed">
          Write, compile, and collaborate in real-time. A cloud-based ecosystem integrating a multi-language code editor with real-time chat and social networking.
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="#demo" className="btn-primary">
            View Demo
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M6 3l5 5-5 5V3z" /></svg>
          </a>
          <a href="/CodeFlow.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            View Documentation
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span>Praveen Kumar M</span>
          <span>Suhas H D</span>
          <span>Sangamesh C</span>
          <span>Akash R</span>
        </div>
      </div>

      {/* Right - Code editor mockup */}
      <div className="hidden lg:block">
        <div className="dark-card overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card">
            <span className="w-3 h-3 rounded-full bg-destructive/60" />
            <span className="w-3 h-3 rounded-full bg-accent/50" />
            <span className="w-3 h-3 rounded-full bg-success/50" />
            <span className="ml-3 text-xs text-muted-foreground font-mono">app.ts</span>
            <span className="ml-2 text-xs text-muted-foreground/50 font-mono">index.ts</span>
          </div>

          {/* Code area */}
          <div className="p-5 font-mono text-sm leading-7">
            {codeLines.map((line) => (
              <div key={line.num} className="flex">
                <span className="w-8 text-right mr-4 text-muted-foreground/40 select-none text-xs leading-7">{line.num}</span>
                <span dangerouslySetInnerHTML={{ __html: line.content || "&nbsp;" }} />
              </div>
            ))}
          </div>

          {/* Terminal */}
          <div className="border-t border-border px-4 py-3 bg-background/50">
            <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
              <span className="text-success">✓</span>
              <span>Connected to room-42 · 2 collaborators online</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;

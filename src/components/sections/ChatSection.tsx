import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const messages = [
  { name: "PK", text: "Just pushed the auth module. JWT tokens are working!", align: "left", color: "bg-primary/20" },
  { name: "SH", text: "Nice! I'll integrate the login UI now 🚀", align: "right", color: "bg-accent/20" },
  { name: "SC", text: "Stream SDK is connected. Chat channels are live!", align: "left", color: "bg-primary/20" },
  { name: "AR", text: "Code editor compiles in 12 languages. Check it out ⚡", align: "right", color: "bg-accent/20" },
];

const chatFeatures = [
  { title: "Secure Token Generation", desc: "JWT-based authentication tokens for secure real-time communication." },
  { title: "Channel Creation", desc: "Dynamic channels for 1-on-1 and group conversations." },
  { title: "Threaded Messaging", desc: "Organized threaded replies for structured discussions." },
  { title: "Video Call Integration", desc: "Seamless video calling for face-to-face collaboration." },
];

const ChatSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="py-28 px-4">
      <div ref={ref} className="section-animate max-w-6xl mx-auto">
        <h2 className="section-heading text-center mb-4">
          <span className="gradient-text">Real-Time Chat System</span>
        </h2>
        <p className="section-subtext text-center mb-16">Built-in communication for seamless collaboration</p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Chat mockup */}
          <div className="dark-card overflow-hidden">
            <div className="px-4 py-3 border-b border-border flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span className="text-sm font-medium text-foreground"># codeflow-team</span>
              <span className="text-xs text-muted-foreground ml-auto">4 online</span>
            </div>
            <div className="p-5 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.align === "right" ? "justify-end" : "justify-start"} gap-2`}>
                  {msg.align === "left" && (
                    <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center shrink-0 mt-1">
                      <span className="text-[10px] font-bold text-muted-foreground">{msg.name}</span>
                    </div>
                  )}
                  <div className={`${msg.color} px-3.5 py-2 rounded-xl max-w-[75%]`}>
                    <p className="text-sm text-foreground/90">{msg.text}</p>
                  </div>
                  {msg.align === "right" && (
                    <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center shrink-0 mt-1">
                      <span className="text-[10px] font-bold text-muted-foreground">{msg.name}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="px-4 py-3 border-t border-border">
              <div className="bg-muted/50 rounded-lg px-3 py-2 text-xs text-muted-foreground/50 font-mono">
                Type a message...
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {chatFeatures.map((f) => (
              <div key={f.title} className="dark-card p-5">
                <h3 className="font-semibold text-foreground text-sm mb-1.5">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;

const CodeFlowLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(250, 80%, 65%)" />
        <stop offset="100%" stopColor="hsl(190, 80%, 50%)" />
      </linearGradient>
    </defs>
    {/* Chat bubble */}
    <rect x="6" y="10" width="52" height="36" rx="12" stroke="url(#logoGrad)" strokeWidth="3" fill="none" />
    <polygon points="18,46 26,46 20,54" fill="url(#logoGrad)" />
    {/* Code brackets */}
    <text x="32" y="35" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontWeight="700" fontSize="18" fill="url(#logoGrad)">
      &lt;/&gt;
    </text>
  </svg>
);

export default CodeFlowLogo;

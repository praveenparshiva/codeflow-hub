import CodeFlowLogo from "../CodeFlowLogo";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 py-12 px-4">
    <div className="max-w-5xl mx-auto text-center">
      <div className="flex justify-center mb-4">
        <CodeFlowLogo className="w-8 h-8" />
      </div>
      <p className="text-sm text-muted-foreground mb-2">© 2026 CodeFlow Project</p>
      <p className="text-xs text-muted-foreground mb-6">
        Developed by Praveen Kumar M, Suhas H D, Sangamesh C, Akash R
      </p>
      <div className="flex justify-center gap-4">
        {[Github, Linkedin, Twitter].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <Icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;

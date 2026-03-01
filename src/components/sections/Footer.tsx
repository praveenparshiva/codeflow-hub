import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="py-12 px-4">
    <div className="max-w-5xl mx-auto">
      <div className="w-full h-px bg-border mb-10" />
      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-1.5">© 2026 CodeFlow Project</p>
        <p className="text-xs text-muted-foreground/60 mb-6">
          Developed by Praveen Kumar M, Suhas H D, Sangamesh C, Akash R
        </p>
        <div className="flex justify-center gap-3">
          {[Github, Linkedin, Twitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

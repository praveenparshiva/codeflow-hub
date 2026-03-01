import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FileText, ExternalLink, Download, X } from "lucide-react";

const DocumentationSection = () => {
  const ref = useScrollAnimation();
  const [showPdfModal, setShowPdfModal] = useState(false);

  return (
    <>
      <section className="py-28 px-4">
        <div ref={ref} className="section-animate max-w-4xl mx-auto">
          <div className="dark-card p-8 sm:p-10 text-center">
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-accent/10 flex items-center justify-center">
              <FileText className="w-6 h-6 text-accent" />
            </div>

            <h3 className="font-semibold text-xl text-foreground mb-2">Project Documentation</h3>
            <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
              View or download the complete project report including system design, architecture diagrams, and implementation details.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <button onClick={() => setShowPdfModal(true)} className="btn-primary">
                View PDF
              </button>
              <a href="/CodeFlow.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <ExternalLink size={16} /> Open
              </a>
              <a href="/CodeFlow.pdf" download className="btn-secondary">
                <Download size={16} /> Download
              </a>
            </div>
          </div>
        </div>
      </section>

      {showPdfModal && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative bg-card rounded-xl w-full max-w-4xl h-[80vh] shadow-2xl overflow-hidden border border-border">
            <button
              onClick={() => setShowPdfModal(false)}
              className="absolute top-3 right-3 z-10 p-2 rounded-lg bg-muted hover:bg-muted/80 transition"
            >
              <X size={18} />
            </button>
            <iframe src="/CodeFlow.pdf" title="Project Documentation PDF" className="w-full h-full" />
          </div>
        </div>
      )}
    </>
  );
};

export default DocumentationSection;

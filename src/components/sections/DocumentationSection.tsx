import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FileText, ExternalLink, Download, X } from "lucide-react";

const DocumentationSection = () => {
  const ref = useScrollAnimation();
  const [showPdfModal, setShowPdfModal] = useState(false);

  return (
    <>
      <section className="py-24 px-4">
        <div ref={ref} className="section-animate max-w-4xl mx-auto">
          
          <div className="bg-card rounded-2xl border border-border p-8 text-center card-hover">
            
            <FileText className="w-12 h-12 text-accent mx-auto mb-4" />

            <h3 className="font-serif font-semibold text-xl text-foreground mb-2">
              Project Documentation (PDF)
            </h3>

            <p className="text-sm text-muted-foreground mb-6">
              View, open externally, or download the complete project report including system design, architecture diagrams, and implementation details.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              
              {/* View Button (Modal) */}
              <button
                onClick={() => setShowPdfModal(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition"
              >
                View PDF
              </button>

              {/* Open in New Tab */}
              <a
                href="/CodeFlow.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium hover:bg-muted transition"
              >
                <ExternalLink size={16} />
                Open
              </a>

              {/* Download */}
              <a
                href="/CodeFlow.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium hover:bg-muted transition"
              >
                <Download size={16} />
                Download
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* PDF MODAL */}
      {showPdfModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="relative bg-background rounded-2xl w-full max-w-4xl h-[80vh] shadow-xl overflow-hidden">
            
            <button
              onClick={() => setShowPdfModal(false)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-muted hover:bg-muted/80 transition"
            >
              <X size={18} />
            </button>

            <iframe
              src="/CodeFlow.pdf"
              title="Project Documentation PDF"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DocumentationSection;

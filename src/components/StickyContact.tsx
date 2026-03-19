import { Phone, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function StickyContact() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!dismissed && window.scrollY > 300) setVisible(true);
      else if (window.scrollY <= 300) setVisible(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      role="complementary"
      aria-label="Greitas skambutis"
      className={`fixed bottom-6 right-4 z-40 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-3 bg-secondary text-secondary-foreground pl-5 pr-3 py-3 rounded-2xl shadow-green">
        <a
          href="tel:+37065208000"
          aria-label="Skambinti dabar į Ortovet: (0-652) 08000"
          className="flex items-center gap-2 font-bold text-sm"
        >
          <Phone size={17} className="animate-pulse" aria-hidden="true" />
          <span className="hidden sm:inline">(0-652) 08000</span>
          <span className="sm:hidden">Skambinti</span>
        </a>
        <button
          onClick={() => { setDismissed(true); setVisible(false); }}
          aria-label="Uždaryti"
          className="p-1 hover:bg-secondary-foreground/10 rounded-lg transition-colors"
        >
          <X size={14} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

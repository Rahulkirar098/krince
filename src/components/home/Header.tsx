import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface HeaderProps {
  scrolled: boolean;
  active: string;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

const NAV_LINKS = [
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "work", label: "Work" },
  { id: "why", label: "Why us" },
  { id: "contact", label: "Contact" },
] as const;

export default function Header({ scrolled, active, onNavClick }: HeaderProps) {
  return (
    <header className={`k-nav ${scrolled ? "k-nav--scrolled" : ""}`}>
      <div className="k-container k-nav__inner">
        <a className="k-logo" href="#top" onClick={(e) => onNavClick(e, "top")}>
          <span className="k-logo__mark"><Sparkles size={16} /></span>
          Krince.in
        </a>
        <nav className="k-nav__links">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => onNavClick(e, l.id)}
              className={active === l.id ? "is-active" : ""}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="k-nav__cta">
          <motion.a
            href="#contact"
            className={`k-btn k-btn--sm ${scrolled ? "k-btn--invert" : "k-btn--primary"}`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            Get in touch
          </motion.a>
        </div>
      </div>
    </header>
  );
}

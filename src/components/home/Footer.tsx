import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className="k-footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="k-container">
        <div className="k-footer__grid">
          <div className="k-footer__brand">
            <a className="k-logo" href="#top">
              <span className="k-logo__mark"><Sparkles size={16} /></span>
              Krince.in
            </a>
            <p>A premium engineering & design studio crafting digital products for ambitious teams.</p>
          </div>
          {[
            { title: "Services", links: ["App Development", "Web Development", "AI Solutions", "UI/UX Design"] },
            { title: "Company", links: ["About", "Work", "Process", "Careers"] },
            { title: "Resources", links: ["Blog", "Case Studies", "Pricing", "Support"] },
          ].map((c) => (
            <div key={c.title}>
              <h4>{c.title}</h4>
              <ul>{c.links.map((l) => <li key={l}><a href="#">{l}</a></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="k-footer__bottom">
          <span>&copy; {new Date().getFullYear()} Krince.in — All rights reserved.</span>
          <span>Designed & engineered with care.</span>
        </div>
      </div>
    </motion.footer>
  );
}

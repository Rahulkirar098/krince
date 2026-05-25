import { motion } from "framer-motion";
import {
  Smartphone, Globe, Server, Brain, Palette, Megaphone, ArrowRight,
} from "lucide-react";
import { fadeUp, stagger } from "./animations";

const services = [
  { icon: Smartphone, title: "Mobile Apps", desc: "Native iOS & Android apps engineered for performance and delight." },
  { icon: Globe, title: "Web Development", desc: "Lightning-fast React & Next.js sites that convert visitors into customers." },
  { icon: Server, title: "Backend & APIs", desc: "Scalable Node.js and Firebase backends built to handle real load." },
  { icon: Brain, title: "AI & Automation", desc: "Smart workflows and AI features that save your team real hours." },
  { icon: Palette, title: "UI / UX Design", desc: "Interfaces that feel as intuitive as they look refined." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Performance campaigns that move the needle, not vanity metrics." },
];

interface ServicesProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export default function Services({ onNavClick }: ServicesProps) {
  return (
    <section className="k-section" id="services">
      <div className="k-container">
        <motion.div
          className="k-section__head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <div className="k-section__eyebrow">What we do</div>
          <h2 className="k-section__title">A full-stack studio for modern teams.</h2>
          <p className="k-section__lead">
            Six disciplines under one roof — so you ship faster with one team that
            owns the whole experience.
          </p>
        </motion.div>

        <motion.div
          className="k-services__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href="#contact"
              onClick={(e) => onNavClick(e, "contact")}
              className="k-service"
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="k-service__num">{String(i + 1).padStart(2, "0")}</div>
              <div className="k-service__icon"><s.icon size={20} /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="k-service__arrow">Learn more <ArrowRight size={14} /></span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

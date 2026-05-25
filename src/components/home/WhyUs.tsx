import { motion } from "framer-motion";
import { Zap, Shield, Clock, Users } from "lucide-react";
import { fadeUp, stagger } from "./animations";

const why = [
  { icon: Zap, t: "Ship in weeks", d: "Senior teams, async-first, no agency overhead. Real velocity." },
  { icon: Shield, t: "Built to last", d: "Type-safe code, full tests and observability from day one." },
  { icon: Clock, t: "On-time delivery", d: "Predictable sprints with weekly demos and clear status." },
  { icon: Users, t: "True partners", d: "We think with you — not just for you. Strategy included." },
];

export default function WhyUs() {
  return (
    <section className="k-section" id="why" style={{ background: "var(--k-gray-50)" }}>
      <div className="k-container">
        <motion.div
          className="k-section__head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <div className="k-section__eyebrow">Why Krince</div>
          <h2 className="k-section__title">A partner, not a vendor.</h2>
        </motion.div>

        <motion.div
          className="k-why__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          {why.map((w) => (
            <motion.div key={w.t} className="k-why__item" variants={fadeUp}>
              <div className="ico"><w.icon size={20} /></div>
              <div>
                <h3>{w.t}</h3>
                <p>{w.d}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

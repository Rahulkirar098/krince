import { motion } from "framer-motion";
import { fadeUp, stagger } from "./animations";

const testimonials = [
  { name: "Ava Chen", role: "Founder, Loop", initials: "AC", q: "Krince shipped our MVP in 6 weeks. We raised our seed round two months later." },
  { name: "Marcus Hill", role: "CTO, Fielder", initials: "MH", q: "Best engineering partner we've worked with. Calm, sharp, and impossibly fast." },
  { name: "Priya Sharma", role: "PM, Northwind", initials: "PS", q: "The design quality is on par with the top SaaS products we use daily." },
];

export default function Testimonials() {
  return (
    <section className="k-section">
      <div className="k-container">
        <motion.div
          className="k-section__head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <div className="k-section__eyebrow">Loved by founders</div>
          <h2 className="k-section__title">Words from teams we've shipped with.</h2>
        </motion.div>

        <motion.div
          className="k-testimonials__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          {testimonials.map((t) => (
            <motion.div key={t.name} className="k-quote" variants={fadeUp}>
              <p>"{t.q}"</p>
              <div className="k-quote__person">
                <div className="k-quote__avatar">{t.initials}</div>
                <div className="k-quote__meta">
                  <div className="name">{t.name}</div>
                  <div className="role">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

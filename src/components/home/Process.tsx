import { motion } from "framer-motion";
import { fadeUp, stagger } from "./animations";

const steps = [
  { n: "01", t: "Discover", d: "We dive deep into your goals, users, and constraints." },
  { n: "02", t: "Design", d: "We sketch flows and craft pixel-perfect interfaces." },
  { n: "03", t: "Build", d: "Our engineers ship production-grade code, fast." },
  { n: "04", t: "Launch", d: "We deploy, measure, and iterate together." },
];

export default function Process() {
  return (
    <section className="k-section k-section--dark" id="process">
      <div className="k-container">
        <motion.div
          className="k-section__head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <div className="k-section__eyebrow">How we work</div>
          <h2 className="k-section__title">A process that respects your time.</h2>
        </motion.div>

        <motion.div
          className="k-process__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          {steps.map((s) => (
            <motion.div key={s.n} className="k-step" variants={fadeUp}>
              <div className="k-step__num">{s.n}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

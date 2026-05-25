import { motion } from "framer-motion";
import { fadeUp, zoomIn, stagger } from "./animations";

const portfolio = [
  { tag: "Fintech", title: "Loop — Banking reimagined" },
  { tag: "AI SaaS", title: "Northwind Copilot" },
  { tag: "Health", title: "Pulse Care Platform" },
  { tag: "Mobility", title: "Fielder Driver App" },
  { tag: "Commerce", title: "Vault Storefront" },
  { tag: "Productivity", title: "Quill Writing Suite" },
];

export default function Portfolio() {
  return (
    <section className="k-section" id="work">
      <div className="k-container">
        <motion.div
          className="k-section__head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <div className="k-section__eyebrow">Selected work</div>
          <h2 className="k-section__title">Products that shipped, scaled, and stuck.</h2>
        </motion.div>

        <motion.div
          className="k-portfolio__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          {portfolio.map((p) => (
            <motion.div
              key={p.title}
              className="k-card"
              variants={zoomIn}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="k-card__bg" />
              <div className="k-card__overlay">
                <div className="k-card__tag">{p.tag}</div>
                <div className="k-card__title">{p.title}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

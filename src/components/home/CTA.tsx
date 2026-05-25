import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="k-cta" id="contact">
      <div className="k-container">
        <motion.div
          className="k-cta__inner"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <h2>Ready to build something people love?</h2>
          <p>Tell us about your project — we'll reply within one business day.</p>
          <div className="k-cta__row">
            <motion.a
              href="mailto:hello@krince.in"
              className="k-btn k-btn--invert"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              Start your project <ArrowRight size={16} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

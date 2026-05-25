import { motion } from "framer-motion";
import { ArrowRight, Brain, Zap } from "lucide-react";
import { fadeLeft, fadeRight } from "./animations";
import avatarImg from "@/assets/avatar.png";

export default function Hero() {
  return (
    <section className="k-hero" id="top">
      <div className="k-container">
        <div className="k-hero__grid">
          <motion.div initial="hidden" animate="visible" variants={fadeLeft}>
            <span className="k-eyebrow"><span className="dot" /> Trusted by 120+ teams worldwide</span>
            <h1>
              Build the future <br />
              of your <span className="muted">product.</span>
            </h1>
            <p className="k-hero__sub">
              Krince.in is a premium engineering & design studio crafting world-class
              apps, websites, and AI products for ambitious teams.
            </p>
            <div className="k-hero__cta">
              <motion.a
                href="#contact"
                className="k-btn k-btn--primary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                Start your project <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="#work"
                className="k-btn k-btn--ghost"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                View our work
              </motion.a>
            </div>
            <div className="k-hero__stats">
              {[["120+","Projects shipped"],["98%","Client retention"],["4.9★","Avg. rating"]].map(([n, l]) => (
                <div key={l}>
                  <div className="num">{n}</div>
                  <div className="lbl">{l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="k-hero__avatar"
            initial="hidden"
            animate="visible"
            variants={fadeRight}
          >
            <motion.div
              className="k-hero__chip k-hero__chip--a"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
            >
              <span className="ico"><Brain size={14} /></span>
              AI-powered workflows
            </motion.div>
            <motion.img
              src={avatarImg}
              alt="Krince virtual developer"
              width={1024}
              height={1024}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="k-hero__chip k-hero__chip--b"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: "easeInOut" }}
            >
              <span className="ico"><Zap size={14} /></span>
              Shipped in weeks
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

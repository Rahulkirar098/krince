import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

interface ScrollToTopProps {
  visible: boolean;
}

export default function ScrollToTop({ visible }: ScrollToTopProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="k-scroll-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          aria-label="Scroll to top"
        >
          <ChevronUp size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

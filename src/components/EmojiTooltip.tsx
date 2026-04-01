import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  children: React.ReactNode;
  emoji: string;
}

export default function EmojiTooltip({ children, emoji }: Props) {
  const [show, setShow] = useState(false);

  return (
    <span
      className="relative inline-block cursor-default border-b border-dashed border-muted/50"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onTouchStart={() => setShow((s) => !s)}
    >
      <AnimatePresence>
        {show && (
          <motion.span
            initial={{ opacity: 0, y: 8, scale: 0.6 }}
            animate={{ opacity: 1, y: -4, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
            className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 text-2xl"
            aria-hidden="true"
          >
            {emoji}
          </motion.span>
        )}
      </AnimatePresence>
      {children}
    </span>
  );
}

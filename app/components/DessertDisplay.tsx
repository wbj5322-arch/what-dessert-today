import { AnimatePresence, motion } from "motion/react";
import type { Dessert } from "../data/desserts";

export function DessertDisplay({ dessert, visible }: { dessert: Dessert; visible: boolean }) {
  return (
    <div className="dessert-viewport">
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key={dessert.id}
            className="dessert-art"
            initial={{ opacity: 0, scale: 0.8, filter: "blur(6px)" }}
            animate={{ opacity: 1, scale: [0.8, 1.04, 1], filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
            transition={{ duration: 0.62, times: [0, 0.72, 1], ease: [0.2, 0.78, 0.24, 1] }}
            style={{ width: `${dessert.scale * 100}%`, height: `${dessert.scale * 100}%` }}
          >
            <img
              className="dessert-cutout"
              src={dessert.image}
              alt={`${dessert.name}, from ${dessert.country}`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

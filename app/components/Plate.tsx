import { motion, type AnimationControls } from "motion/react";

const ringText = "WHAT DESSERT TODAY · SWEET ORACLE · ";

export function Plate({ controls }: { controls: AnimationControls }) {
  return (
    <motion.div className="plate" animate={controls}>
      <div className="plate-rim" />
      <div className="plate-well" />
      <div className="plate-glaze" />
      <div className="plate-monogram">W<span>✦</span>D</div>
      <div className="plate-ring-text" aria-hidden="true">
        {[...ringText].map((letter, index) => (
          <span key={`${letter}-${index}`} style={{ transform: `rotate(${index * (360 / ringText.length)}deg)` }}>
            {letter}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

import { motion, type AnimationControls } from "motion/react";

const faces = [1, 6, 3, 4, 2, 5];

function Pips({ count }: { count: number }) {
  return <>{Array.from({ length: count }, (_, index) => <i key={index} />)}</>;
}

export function Dice({ controls, disabled, onRoll }: { controls: AnimationControls; disabled: boolean; onRoll: () => void }) {
  return (
    <button className="dice-button" type="button" disabled={disabled} onClick={onRoll} aria-label="Roll the dice to choose a dessert">
      <motion.span className="dice-cube" animate={controls} whileHover={!disabled ? { y: -7, rotateX: -12, rotateY: 15 } : undefined} whileTap={!disabled ? { scale: 0.94 } : undefined}>
        {faces.map((count, index) => <span key={count} className={`dice-face face-${index + 1}`}><Pips count={count} /></span>)}
      </motion.span>
      <span className="dice-shadow" />
    </button>
  );
}

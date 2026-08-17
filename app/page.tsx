"use client";

import { useRef, useState } from "react";
import { useAnimation } from "motion/react";
import { dessertData, type Dessert } from "./data/desserts";
import { Plate } from "./components/Plate";
import { Dice } from "./components/Dice";
import { Utensils } from "./components/Utensils";
import { DessertDisplay } from "./components/DessertDisplay";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Home() {
  const [dessert, setDessert] = useState<Dessert>(dessertData[0]);
  const [phase, setPhase] = useState<"ready" | "rolling" | "stopped" | "reveal">("ready");
  const [dessertVisible, setDessertVisible] = useState(true);
  const locked = useRef(false);
  const rotation = useRef(0);
  const plateControls = useAnimation();
  const diceControls = useAnimation();

  const roll = async () => {
    if (locked.current) return;
    locked.current = true;
    try {
      setPhase("rolling");
      setDessertVisible(false);

      let next = dessert;
      while (next.id === dessert.id) {
        next = dessertData[Math.floor(Math.random() * dessertData.length)];
      }

      const plateTurn = 130 + Math.round(Math.random() * 80);
      const nextRotation = rotation.current + plateTurn;

      void diceControls.start({
        rotateX: [0, 370, 860, 1210, 1450],
        rotateY: [0, 480, 1040, 1620, 1940],
        rotateZ: [0, 95, 250, 395, 450],
        y: [0, -20, -8, 3, 0],
        scale: [1, 1.07, 1.03, 1, 1],
        transition: { duration: 1.45, times: [0, 0.28, 0.58, 0.82, 1], ease: [0.16, 0.78, 0.28, 1] },
      });
      void plateControls.start({
        rotate: [rotation.current, rotation.current + plateTurn * 0.22, rotation.current + plateTurn * 0.7, nextRotation],
        transition: { duration: 1.45, times: [0, 0.28, 0.7, 1], ease: [0.12, 0.72, 0.18, 1] },
      });

      // The reveal follows a fixed timeline instead of waiting on animation
      // callbacks, so background tabs and interrupted motion cannot leave an empty plate.
      await wait(1450);
      rotation.current = nextRotation;
      setPhase("stopped");
      await wait(210);
      setDessert(next);
      setDessertVisible(true);
      setPhase("reveal");
      await wait(660);
      setPhase("ready");
    } finally {
      locked.current = false;
    }
  };

  return (
    <main className="tableau">
      <div className="cloth-fold cloth-fold-one" />
      <div className="cloth-fold cloth-fold-two" />

      <header className="editorial-title" aria-label="What Dessert Today?">
        <span>WHAT</span>
        <span>DESSERT</span>
        <span className="accent-word">TODAY?</span>
      </header>

      <div className="issue-note" aria-hidden="true">
        <span>SWEET ORACLE</span>
        <span>ISSUE 01 / 24</span>
      </div>

      <Utensils />

      <section className="plate-stage" aria-live="polite" aria-busy={phase !== "ready"}>
        <Plate controls={plateControls} />
        <DessertDisplay dessert={dessert} visible={dessertVisible} />
        <div className={`dessert-caption ${dessertVisible ? "is-visible" : ""}`}>
          <h1>{dessert.name}</h1>
          <div className="caption-rule" />
          <p>{dessert.country}</p>
        </div>
      </section>

      <div className="dice-dock">
        <span className={`roll-status phase-${phase}`}>
          {phase === "ready" ? "ROLL FOR A TREAT" : phase === "rolling" ? "ROLLING…" : phase === "stopped" ? "STOP" : "BON APPÉTIT"}
        </span>
        <Dice controls={diceControls} disabled={phase !== "ready"} onRoll={roll} />
      </div>

      <p className="microcopy">ONE CLICK · ONE DESSERT · NO REGRETS</p>
    </main>
  );
}

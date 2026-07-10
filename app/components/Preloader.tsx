"use client";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 2600);
    return () => clearTimeout(timer);
  }, []);

  const letters = "LOCKGIN".split("");

  return (
    <div className={`preloader ${hidden ? "is-hidden" : ""}`}>
      <div className="preloader-word">
        {letters.map((letter, i) => (
          <span
            key={i}
            className={`preloader-letter ${letter === "N" ? "is-red" : ""}`}
            style={{ animationDelay: `${0.1 + i * 0.15}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="preloader-bar">
        <div className="preloader-bar-fill" />
      </div>
    </div>
  );
}

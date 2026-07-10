"use client";

import { useEffect, useRef } from "react";
import { audit } from "@/app/data/content";

export default function Audit() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
          observer.unobserve(section);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const lockgin = "LOCKGIN".split("");

  return (
    <section id="audit" className="audit" ref={sectionRef}>
      <div className="audit-inner">
        <div className="audit-text">
          <h2 className="audit-title">{audit.title}</h2>
          <p className="audit-pain">{audit.pain}</p>
          <p className="audit-desc">{audit.description}</p>

          <div className="audit-meta">
            <span className="audit-duration">{audit.duration}</span>
            <div className="audit-price-block">
              <span className="audit-price">{audit.price}</span>
              <span className="audit-old-price">{audit.oldPrice}</span>
            </div>
          </div>

          <a
            href={audit.paymentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="audit-btn"
          >
            {audit.cta}
          </a>
        </div>

        <div className="audit-logo">
          <div className="audit-lockgin">
            {lockgin.map((letter, i) => (
              <span key={i} className="audit-letter">
                {letter}
              </span>
            ))}
          </div>
          <div className="audit-sub">
            <span className="audit-sub-1">MARKETING</span>
            <span className="audit-sub-2">AGENCY</span>
          </div>
        </div>
      </div>
    </section>
  );
}

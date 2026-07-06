'use client';

import { useState } from 'react';
import { services } from '@/app/data/content';

export default function Services() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="services" className="services">
      <div className="services-inner">
        <h2 className="services-heading">Что мы можем предложить</h2>
        <div className="services-grid">
          {services.map((s) => (
            <div
              key={s.id}
              className={`service-card ${active === s.id ? 'is-active' : ''}`}
              onMouseEnter={() => setActive(s.id)}
              onMouseLeave={() => setActive(null)}
            >
              <div className="service-card-main">
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
              <div className="service-card-example">
                <span className="service-label">Пример</span>
                {s.example.type === 'image' && (
                  <div className="example-placeholder">
                    <span>📷 {s.example.caption}</span>
                  </div>
                )}
                {s.example.type === 'video' && (
                  <div className="example-placeholder">
                    <span>▶️ {s.example.caption}</span>
                  </div>
                )}
                {s.example.type === 'url' && (
                  <a
                    href={s.example.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="example-link"
                  >
                    🔗 {s.example.caption}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

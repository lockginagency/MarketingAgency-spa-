'use client';

import { useState } from 'react';
import { cases } from '@/app/data/content';

export default function Cases() {
  const [activeId, setActiveId] = useState<number>(cases[0].id);
  const activeCase = cases.find((c) => c.id === activeId) || cases[0];

  return (
    <section id="cases" className="cases">
      <div className="cases-inner">
        <h2 className="cases-heading">Кейсы</h2>
        <div className="cases-body">
          <ul className="cases-list">
            {cases.map((c) => (
              <li
                key={c.id}
                className={activeId === c.id ? 'is-active' : ''}
                onMouseEnter={() => setActiveId(c.id)}
              >
                <span className="cases-client">{c.client}</span>
                <span className="cases-result">{c.result}</span>
              </li>
            ))}
          </ul>
          <div className="cases-preview" key={activeCase.id}>
            <div className="cases-preview-inner">
              <div className="cases-tags">
                {activeCase.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <h3>{activeCase.client}</h3>
              <p className="cases-result-big">{activeCase.result}</p>
              <p className="cases-desc">{activeCase.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

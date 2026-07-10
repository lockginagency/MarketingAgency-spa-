import { pricing } from "@/app/data/content";

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="pricing-inner">
        <h2 className="pricing-heading">Тарифы</h2>
        <div className="pricing-grid">
          {pricing.map((p) => (
            <div
              key={p.name}
              className={`pricing-card ${p.recommended ? "is-recommended" : ""}`}
            >
              {p.recommended && <span className="pricing-badge">Выгодно</span>}
              <h3>{p.name}</h3>
              <div className="pricing-price">
                <span>{p.price}</span>
                <small>{p.period}</small>
              </div>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                href={p.paymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="pricing-btn"
              >
                Выбрать
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

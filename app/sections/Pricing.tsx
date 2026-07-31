const plans = [
  {
    name: "Пробный",
    price: "12 900",
    features: [
      "1 рекламный канал (VK или Telegram)",
      "Экспресс-анализ конкурентов (2-3 конкурента)",
      "5 постов в месяц",
      "15 Reels / коротких видео",
      "3 креатива под ЦА",
      "Настройка Яндекс Метрики + цели",
      "Отчёт по заявкам",
      "Поддержка в рабочее время",
      "Автопродление, отмена в любой момент",
    ],
    featured: false,
  },
  {
    name: "Бизнес",
    price: "49 900",
    features: [
      "3+ рекламных канала (VK + Яндекс + Telegram)",
      "Глубокий анализ конкурентов + УТП + позиционирование",
      "Лендинг/квиз + чат-бот для захвата заявок",
      "20 постов + Stories в месяц",
      "Безлимитные Reels / короткие видео",
      "15 креативов под ЦА",
      "Полная аналитика (CAC, LTV, ROMI) + сквозная",
      "Стратегия на месяц + корректировки",
      "A/B-тестирование креативов и офферов",
      "Персональный менеджер",
      "Приоритетная поддержка",
      "Автопродление, отмена в любой момент",
    ],
    featured: true,
  },
  {
    name: "Старт",
    price: "29 900",
    features: [
      "2 рекламных канала (VK + Яндекс)",
      "Анализ конкурентов + разработка УТП",
      "Лендинг или квиз под рекламу",
      "12 постов в месяц",
      "25 Reels / коротких видео",
      "8 креативов под ЦА",
      "Настройка аналитики + UTM-метки",
      "Отчёт по заявкам + ROI",
      "Стратегия продвижения на месяц",
      "Поддержка в рабочее время",
      "Автопродление, отмена в любой момент",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="pricing-inner">
        <div className="pricing-label">
          <span className="pricing-dot" />
          УСЛОВИЯ
        </div>
        <h2 className="pricing-heading">Тарифы</h2>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-col ${plan.featured ? "pricing-featured" : ""}`}
            >
              {plan.featured && (
                <span className="pricing-badge">ОСНОВНОЕ</span>
              )}
              <h3 className="pricing-name">{plan.name}</h3>
              <div className="pricing-price">
                {plan.price}
                <span className="pricing-period"> ₽/мес</span>
              </div>
              <ul className="pricing-features">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#footer" className="pricing-cta">
                Выбрать тариф →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

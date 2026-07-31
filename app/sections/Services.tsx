const services = [
  {
    num: "01",
    title: "Настройка рекламы",
    desc: "VK Реклама, Яндекс Директ, Telegram Ads.",
    tag: "ОСНОВНОЕ",
  },
  {
    num: "02",
    title: "Анализ и УТП",
    desc: "Разбор конкурентов, позиционирование бренда.",
  },
  {
    num: "03",
    title: "Лендинги и боты",
    desc: "Квизы, посадочные страницы, чат-боты для заявок.",
  },
  {
    num: "04",
    title: "Контент",
    desc: "Посты, Reels, короткие видео, креативы под ЦА.",
  },
  {
    num: "05",
    title: "Аналитика",
    desc: "Метрика, UTM-метки, CAC, LTV, ROMI.",
  },
  {
    num: "06",
    title: "Стратегия",
    desc: "План на месяц, A/B-тесты креативов и офферов.",
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services-inner">
        <div className="services-label">
          <span className="services-dot" />
          ЧТО МЫ ДЕЛАЕМ
        </div>
        <h2 className="services-heading">Услуги</h2>

        <div className="services-list">
          {services.map((s, i) => (
            <div
              key={s.num}
              className={`services-row ${i % 2 === 1 ? "services-row-reverse" : ""}`}
            >
              <div className="services-num">{s.num}</div>
              <div className="services-content">
                <h3 className="services-title">{s.title}</h3>
                <p className="services-desc">{s.desc}</p>
                {s.tag && <span className="services-tag">{s.tag}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

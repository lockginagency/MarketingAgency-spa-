const steps = [
  { n: "1", title: "Заявка", text: "Оставляете заявку на сайте", red: false },
  { n: "2", title: "Аудит", text: "Разбираем вашу рекламу", red: false },
  { n: "3", title: "Стратегия", text: "Строим план продвижения", red: true },
  { n: "4", title: "Запуск", text: "Ведём кампании и контент", red: false },
  { n: "5", title: "Отчёт", text: "Показываем результат в цифрах", red: false },
];

export default function HowWeWork() {
  return (
    <section id="howwework" className="hww">
      <div className="hww-inner">
        <h2 className="hww-heading">Как мы работаем</h2>
        <div className="hww-track">
          <div className="hww-line-bg" />
          <div className="hww-line-fg" />
          <div className="hww-steps">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="hww-step"
                style={{ animationDelay: `${0.3 + i * 0.4}s` }}
              >
                <div className={`hww-num ${s.red ? "is-red" : ""}`}>{s.n}</div>
                <h3 className="hww-step-title">{s.title}</h3>
                <p className="hww-step-text">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

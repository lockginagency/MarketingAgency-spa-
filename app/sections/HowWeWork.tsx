const steps = [
  { num: "01", title: "Заявка", desc: "Обсуждаем задачу и цели." },
  { num: "02", title: "Аудит", desc: "Разбираем текущий маркетинг." },
  { num: "03", title: "Стратегия", desc: "План на месяц под вашу нишу." },
  { num: "04", title: "Запуск", desc: "Ведём кампании и контент." },
  { num: "05", title: "Отчёт", desc: "Результат в цифрах." },
];

export default function HowWeWork() {
  return (
    <section className="how">
      <div className="how-bgtext">LOCKGIN</div>
      <div className="how-inner">
        <div className="how-label">
          <span className="how-dot" />
          ПРОЦЕСС
        </div>
        <h2 className="how-heading">Как мы работаем</h2>

        <div className="how-stack">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`how-card ${i === steps.length - 1 ? "how-card-last" : ""}`}
              style={{ zIndex: i, left: `${i * 80}px` }}
            >
              <div className="how-num">{s.num}</div>
              <div className="how-title">{s.title}</div>
              <div className="how-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

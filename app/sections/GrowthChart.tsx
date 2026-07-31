const steps = [
  { label: "Старт", desc: "Анализ и запуск первых кампаний", h: 90 },
  { label: "Тест", desc: "Проверка гипотез и креативов", h: 140 },
  { label: "Масштаб", desc: "Увеличение бюджета на рабочие связки", h: 190 },
  { label: "Результат", desc: "Стабильный поток заявок", h: 240 },
];

export default function GrowthChart() {
  return (
    <section className="growth">
      <div className="growth-bgtext">LOCKGIN</div>
      <div className="growth-inner">
        <div className="growth-logo">LOCKGIN</div>

        <div className="growth-bars">
          {steps.map((s, i) => (
            <div key={s.label} className="growth-bar-col">
              <div
                className={`growth-bar ${i === steps.length - 1 ? "growth-bar-last" : ""}`}
                style={{ height: `${s.h}px` }}
              />
              <div
                className={`growth-bar-label ${i === steps.length - 1 ? "growth-bar-label-last" : ""}`}
              >
                {s.label}
              </div>
              <div className="growth-bar-desc">{s.desc}</div>
            </div>
          ))}
        </div>

        <div className="growth-hook">
          <span className="growth-hook-crossed">«Взрывной рост за 3 дня»</span>
          <span className="growth-hook-note">так не работает →</span>
        </div>

        <h2 className="growth-heading">Путь к результату — по шагам</h2>
        <p className="growth-sub">
          Работаем со всеми площадками — от VK и Telegram до Яндекс
          Директа — и собираем результат в одной воронке.
        </p>
      </div>
    </section>
  );
}

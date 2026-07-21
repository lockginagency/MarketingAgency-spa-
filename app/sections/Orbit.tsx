const ring1 = [
  { label: "VK", color: "#0077FF" },
  { label: "TG", color: "#2AABEE" },
  { label: "Я", color: "#FF0000" },
];
const ring2 = [
  { label: "TT", color: "#000000" },
  { label: "YT", color: "#FF0000" },
  { label: "IG", color: "#E1306C" },
];

export default function Orbit() {
  return (
    <section id="orbit" className="orbit">
      <div className="orbit-inner">
        <h2 className="orbit-heading">Ваш бизнес — в центре внимания</h2>
        <p className="orbit-sub">
          Работаем со всеми площадками, где живёт ваша аудитория
        </p>

        <div className="orbit-stage">
          <div className="orbit-core">LOCKGIN</div>

          <div className="orbit-ring orbit-ring-1">
            {ring1.map((p, i) => (
              <div
                key={p.label}
                className="orbit-item"
                style={{ transform: `rotate(${i * 120}deg) translateX(140px)` }}
              >
                <span
                  className="orbit-badge"
                  style={{ background: p.color, transform: `rotate(-${i * 120}deg)` }}
                >
                  {p.label}
                </span>
              </div>
            ))}
          </div>

          <div className="orbit-ring orbit-ring-2">
            {ring2.map((p, i) => (
              <div
                key={p.label}
                className="orbit-item"
                style={{ transform: `rotate(${i * 120 + 60}deg) translateX(220px)` }}
              >
                <span
                  className="orbit-badge"
                  style={{ background: p.color, transform: `rotate(-${i * 120 + 60}deg)` }}
                >
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

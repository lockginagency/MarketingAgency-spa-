const platforms = [
  { name: "VK", top: "0%", left: "2%", rotate: -6 },
  { name: "Яндекс Директ", top: "5%", left: "28%", rotate: 3 },
  { name: "Telegram", top: "16%", left: "56%", rotate: -4 },
  { name: "Instagram", top: "26%", left: "10%", rotate: 5 },
  { name: "YouTube", top: "30%", left: "36%", rotate: -3 },
  { name: "Маркетплейсы", top: "24%", left: "64%", rotate: 4 },
];

export default function Platforms() {
  return (
    <section className="platforms">
      <div className="platforms-bgtext">LOCKGIN</div>
      <div className="platforms-inner">
        <div className="platforms-label">
          <span className="platforms-dot" />
          КАНАЛЫ ПРОДВИЖЕНИЯ
        </div>
        <h2 className="platforms-heading">Площадки, с которыми работаем</h2>

        <div className="platforms-board">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="platforms-sticker"
              style={{
                top: p.top,
                left: p.left,
                // @ts-expect-error custom css var
                "--rot": `${p.rotate}deg`,
              }}
            >
              <span className="platforms-tape" />
              {p.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const items = [
  "Яндекс Директ",
  "VK Реклама",
  "Telegram Ads",
  "SMM",
  "Reels / видео",
  "YouTube Shorts",
  "TikTok",
  "Instagram",
  "Копирайтинг",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <section className="marquee">
      <div className="marquee-track">
        {row.map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-text">{item}</span>
            <span className="marquee-dot">●</span>
          </span>
        ))}
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bgtext">LOCKGIN</div>
      <div className="hero-inner">
        <div className="hero-top">
          <span className="hero-logo">LOCKGIN</span>
          <span className="hero-label">PERFORMANCE MARKETING</span>
        </div>

        <h1 className="hero-title">
          Масштабируем бренды через
          <br />
          <span className="hero-underline">performance-рекламу</span>
        </h1>

        <div className="hero-bottom">
          <p className="hero-sub">
            Работаем по всей России, без привязки к городу
            и часовому поясу клиента.
          </p>
          <a href="#footer" className="hero-cta">
            Обсудить проект
          </a>
        </div>
      </div>
    </section>
  );
}

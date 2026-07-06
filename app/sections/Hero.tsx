import { heroContent } from '@/app/data/content';

export default function Hero() {
  return (
    <section id="who" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{heroContent.headline}</h1>
        <p className="hero-subtitle">{heroContent.subheadline}</p>
        <a href="#footer" className="hero-cta">{heroContent.cta}</a>
      </div>
      <div className="hero-scroll"><span /></div>
    </section>
  );
}

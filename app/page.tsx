import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Cases from './sections/Cases';
import Pricing from './sections/Pricing';
import Footer from './sections/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Cases />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}

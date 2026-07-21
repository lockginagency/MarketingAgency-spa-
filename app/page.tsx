import Navbar from "./components/Navbar";
import Audit from "./components/Audit";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import GrowthChart from "./sections/GrowthChart";
import HowWeWork from "./sections/HowWeWork";
import Marquee from "./sections/Marquee";
import Orbit from "./sections/Orbit";
import Pricing from "./sections/Pricing";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <GrowthChart />
        <Orbit />
        <HowWeWork />
        <Audit />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}

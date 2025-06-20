import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/Portfolio";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Header />
        <HeroSection />
      </div>
      <AboutUs />
      <PortfolioSection />
      <Pricing />
      <Footer />
    </>
  );
}

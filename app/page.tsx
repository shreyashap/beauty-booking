import HeroSection from "@/components/HeroSection";
import CategoriesCard from "@/components/CategoriesCard";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <main className="font-ui text-text-primary">
      <Navbar />
      <HeroSection />
      <CategoriesCard />
      <Marquee />
      <Footer />
    </main>
  );
}

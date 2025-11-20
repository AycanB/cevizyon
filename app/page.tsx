import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import PersonaSection from "@/components/home/PersonaSection";
import WhyUs from "@/components/home/WhyUs";
import ProductsGrid from "@/components/home/ProductsGrid";
import StoryTimeline from "@/components/home/StoryTimeline";
import OrderSteps from "@/components/home/OrderSteps";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PersonaSection />
        <WhyUs />
        <ProductsGrid />
        <StoryTimeline />
        <OrderSteps />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import HeroBenKimim from '@/components/about/HeroBenKimim';
import LifeTimeline from '@/components/about/LifeTimeline';
import CtrlZSection from '@/components/about/CtrlZSection';
import InstagramPreview from '@/components/about/InstagramPreview';
import PromiseSection from '@/components/about/PromiseSection';
import ContactCta from '@/components/about/ContactCta';

export const metadata: Metadata = {
  title: "Ben Kimim? | Cevizyon | Aycan’ın Bahçesi",
  description: "Aycan Bülbül’ün Amasya Merzifon’da, üç nesildir süren ceviz yolculuğunun hikâyesi. 20 yıl yazılım, şimdi toprak.",
  openGraph: {
    title: "Ben Kimim? | Cevizyon | Aycan’ın Bahçesi",
    description: "Aycan Bülbül’ün Amasya Merzifon’da, üç nesildir süren ceviz yolculuğunun hikâyesi.",
    type: "website",
    url: "https://cevizyon.com/ben-kimim", // Gerçek URL ile değiştirilmeli
    images: [
      {
        url: "https://images.unsplash.com/photo-1535090467336-9501f96eef89?q=80&w=1200&auto=format&fit=crop", // Placeholder
        width: 1200,
        height: 630,
        alt: "Aycan Bülbül ve Ceviz Bahçesi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ben Kimim? | Cevizyon | Aycan’ın Bahçesi",
    description: "20 yıl yazılım, şimdi toprak. Aycan Bülbül'ün hikayesi.",
    images: ["https://images.unsplash.com/photo-1535090467336-9501f96eef89?q=80&w=1200&auto=format&fit=crop"], // Placeholder
  },
};

export default function AboutMe() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <HeroBenKimim />
        <LifeTimeline />
        <CtrlZSection />
        <InstagramPreview />
        <PromiseSection />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}

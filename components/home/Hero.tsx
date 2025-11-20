import Image from 'next/image';
import { Check } from 'lucide-react';

export default function Hero() {
  return (
    <header className="pt-36 pb-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-pattern-leaf -z-10 opacity-60"></div>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10 space-y-6 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-brand-green/20 rounded-full shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs font-bold text-brand-green tracking-wide uppercase">Yeni Hasat: Ekim 2025</span>
                </div>
                
                <h1 className="font-display text-5xl md:text-6xl font-extrabold text-brand-ink leading-[1.1]">
                    Amasya Merzifon'dan <br />
                    <span className="text-brand-green">Evinize Gelen Doğallık.</span>
                </h1>

                <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0 font-light">
                    "Ben Aycan. Plaza hayatını bıraktım, dedemin bahçesine döndüm. Şimdi yazılımda gösterdiğim titizliği, sofranıza gelen her bir cevizi seçerken gösteriyorum."
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
                    <a href="#urunler" className="px-8 py-4 rounded-full bg-brand-green text-white font-bold shadow-lg hover:bg-brand-darkGreen hover:-translate-y-1 transition-all text-center">
                        Ürünleri İncele
                    </a>
                    <a href="#hikayem" className="px-8 py-4 rounded-full border-2 border-brand-brown/20 text-brand-brown font-bold hover:bg-brand-brown/5 transition-all text-center">
                        Hikayemizi İzle
                    </a>
                </div>
            </div>

            <div className="relative">
                <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl rotate-1 border-4 border-white h-[550px]">
                    <Image 
                      src="https://images.unsplash.com/photo-1605255868226-3874937d1a5c?q=80&w=800&auto=format&fit=crop" 
                      alt="Aycan Ceviz Bahçesinde" 
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur px-5 py-3 rounded-xl shadow-lg">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-brand-green">
                                <Check className="w-5 h-5" strokeWidth={2} />
                            </div>
                            <div>
                                <p className="font-display font-bold text-brand-ink text-sm">Tek Tek Elle Seçildi</p>
                                <p className="text-xs text-gray-500">Sıfır Hata, %100 Doğal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
}

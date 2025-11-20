import Image from 'next/image';
import { Plus } from 'lucide-react';

export default function ProductsGrid() {
  return (
    <section id="urunler" className="py-24 bg-brand-cream relative">
        <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-ink">Bahçemizden Sofranıza</h2>
                <p className="text-gray-600 mt-3">2025 Hasadı, sınırlı stok ve en taze haliyle.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Product 1 */}
                <div className="group bg-white rounded-2xl p-3 shadow-card hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                    <div className="relative bg-gray-100 rounded-xl aspect-square mb-4 overflow-hidden">
                        <span className="absolute top-3 left-3 bg-brand-green text-white text-[10px] font-bold px-3 py-1 rounded-full z-10 shadow-sm">ÇOK SATAN</span>
                        <Image 
                            src="https://images.unsplash.com/photo-1634739207858-689b6f79a65e?q=80&w=600&auto=format&fit=crop"
                            alt="İnce Kabuklu Ceviz"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                        />
                    </div>
                    <div className="px-2 pb-2">
                        <h3 className="font-display font-bold text-brand-ink text-lg">İnce Kabuklu Ceviz</h3>
                        <p className="text-sm text-gray-500">1 Kg • File</p>
                        <div className="mt-3 flex justify-between items-center">
                            <span className="font-bold text-brand-green text-xl">320₺</span>
                            <button className="w-10 h-10 bg-brand-softGray rounded-full flex items-center justify-center text-brand-ink hover:bg-brand-green hover:text-white transition-colors">
                                <Plus className="w-5 h-5" strokeWidth={2} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product 2 */}
                <div className="group bg-white rounded-2xl p-3 shadow-card hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                    <div className="relative bg-gray-100 rounded-xl aspect-square mb-4 overflow-hidden">
                        <Image 
                            src="https://images.unsplash.com/photo-1554483425-9b283299a025?q=80&w=600&auto=format&fit=crop"
                            alt="Kelebek İç Ceviz"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                        />
                    </div>
                    <div className="px-2 pb-2">
                        <h3 className="font-display font-bold text-brand-ink text-lg">Kelebek İç Ceviz</h3>
                        <p className="text-sm text-gray-500">500 Gr • Paket</p>
                        <div className="mt-3 flex justify-between items-center">
                            <span className="font-bold text-brand-green text-xl">350₺</span>
                            <button className="w-10 h-10 bg-brand-softGray rounded-full flex items-center justify-center text-brand-ink hover:bg-brand-green hover:text-white transition-colors">
                                <Plus className="w-5 h-5" strokeWidth={2} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product 3 */}
                <div className="group bg-white rounded-2xl p-3 shadow-card hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                    <div className="relative bg-gray-100 rounded-xl aspect-square mb-4 overflow-hidden">
                        <span className="absolute top-3 left-3 bg-brand-brown text-white text-[10px] font-bold px-3 py-1 rounded-full z-10 shadow-sm">GELENEKSEL</span>
                        <Image 
                            src="https://images.unsplash.com/photo-1529105896405-37226c9815b3?q=80&w=600&auto=format&fit=crop"
                            alt="Cevizli Sucuk"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                        />
                    </div>
                    <div className="px-2 pb-2">
                        <h3 className="font-display font-bold text-brand-ink text-lg">Cevizli Sucuk</h3>
                        <p className="text-sm text-gray-500">400 Gr • Pekmezli</p>
                        <div className="mt-3 flex justify-between items-center">
                            <span className="font-bold text-brand-green text-xl">280₺</span>
                            <button className="w-10 h-10 bg-brand-softGray rounded-full flex items-center justify-center text-brand-ink hover:bg-brand-green hover:text-white transition-colors">
                                <Plus className="w-5 h-5" strokeWidth={2} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product 4 (Disabled) */}
                <div className="group bg-white rounded-2xl p-3 shadow-card opacity-70 cursor-not-allowed">
                    <div className="relative bg-gray-100 rounded-xl aspect-square mb-4 overflow-hidden">
                        <span className="absolute top-3 left-3 bg-gray-500 text-white text-[10px] font-bold px-3 py-1 rounded-full z-10 shadow-sm">HEDİYELİK</span>
                        <Image 
                            src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=600&auto=format&fit=crop"
                            alt="Karışık Kutu"
                            fill
                            className="object-cover grayscale mix-blend-multiply"
                        />
                    </div>
                    <div className="px-2 pb-2">
                        <h3 className="font-display font-bold text-brand-ink text-lg">Karışık Kutu</h3>
                        <p className="text-sm text-gray-500">Özel Paketleme</p>
                        <div className="mt-3 flex justify-between items-center">
                            <span className="font-bold text-gray-400 text-sm">TÜKENDİ</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

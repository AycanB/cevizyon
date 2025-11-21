import { Sprout, Terminal, Heart } from 'lucide-react';

export default function LifeTimeline() {
  return (
    <section className="max-w-5xl mx-auto px-6 mb-24">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1: Çocukluk */}
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-card relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cream rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform"></div>
          <div className="w-12 h-12 bg-brand-cream rounded-xl flex items-center justify-center text-brand-brown mb-6 relative z-10">
            <Sprout className="w-6 h-6" strokeWidth={2} />
          </div>
          <h3 className="font-display font-bold text-xl mb-3 text-brand-ink">Çuval Arasında Saklambaç</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Benim için dünya, ceviz ağaçlarının gölgesinden ibaretti. Babamın nasırlı elleriyle toprağı nasıl evlat sever gibi sevdiğini izleyerek büyüdüm. Ceviz hasadı zamanı bizim için bir nevi düğün bayramdı. O yıllarda öğrendim ki; <strong>"Emek vermediğin ağaç, gölgesini bile esirger."</strong>
          </p>
        </div>

        {/* Card 2: Yazılımcılık */}
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-card relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform"></div>
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700 mb-6 relative z-10">
            <Terminal className="w-6 h-6" strokeWidth={2} />
          </div>
          <h3 className="font-display font-bold text-xl mb-3 text-brand-ink">Klavyede Geçen 20 Yıl</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Sonra traktör direksiyonunu bıraktım, klavyenin başına geçtim. Tıpkı babamın tarlayı sürdüğü gibi, ben de ekranlarda satır satır kod sürdüm. Disiplini, gece gündüz demeden çalışmayı ve "mükemmel" peşinde koşmayı ben o plazalarda öğrendim. <em>(Arada o filtre kahveleri de özlemiyor değilim, yalan yok!)</em>
          </p>
        </div>

        {/* Card 3: Dönüş */}
        <div className="bg-brand-green p-8 rounded-3xl border border-brand-green shadow-card relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:scale-110 transition-transform"></div>
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mb-6 relative z-10">
            <Heart className="w-6 h-6" strokeWidth={2} />
          </div>
          <h3 className="font-display font-bold text-xl mb-3 text-white">Mühendis Çiftçilik</h3>
          <p className="text-sm text-brand-cream leading-relaxed">
            Ve final... İki dünyayı birleştirdim. Ama bu kez dedemden gördüklerimle yetinmedim; mühendis kafasıyla, veriyle, analizle döndüm. Rüzgarın yönünü hesapladım, toprağın pH’ını ölçtüm. Artık hem dedemin duası hem de bilimin ışığı var bu bahçede.
          </p>
        </div>
      </div>
    </section>
  );
}


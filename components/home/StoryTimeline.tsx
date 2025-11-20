export default function StoryTimeline() {
  return (
    <section id="hikayem" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-ink">
            Üç Kuşak, Tek Bahçe
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Her şey dedemin Amasya Merzifon’da ilk fidanı dikmesiyle başladı. 
            Bugün aynı bahçede, aynı rüzgarın altında üretim yapmaya devam ediyoruz.
          </p>
        </div>
    
        <div className="relative border-l-2 border-brand-green/20 ml-4 space-y-10">
          <div className="relative pl-8">
            <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-brand-brown border-4 border-white"></span>
            <div className="bg-brand-cream rounded-2xl p-6 shadow-card border border-brand-brown/10">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display font-bold text-lg text-brand-ink">Dedem ve İlk Fidan</h3>
                <span className="font-mono text-xs bg-brand-brown/10 text-brand-brown px-2 py-1 rounded">1960</span>
              </div>
              <p className="text-sm text-gray-700">
                “Toprak ne verirse o” diyerek ilk ceviz fidanını dikti. O gün attığı çekirdeğin gölgesinde bugün çalışıyoruz.
              </p>
            </div>
          </div>
    
          <div className="relative pl-8">
            <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-brand-brown border-4 border-white"></span>
            <div className="bg-brand-cream rounded-2xl p-6 shadow-card border border-brand-brown/10">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display font-bold text-lg text-brand-ink">Babamın Disiplini</h3>
                <span className="font-mono text-xs bg-brand-brown/10 text-brand-brown px-2 py-1 rounded">1990</span>
              </div>
              <p className="text-sm text-gray-700">
                Bahçeyi büyüttü, ağaca saygıyı ve erken kalkmanın önemini öğretti. Cevizin sadece ürün değil emek olduğunu ondan gördüm.
              </p>
            </div>
          </div>
    
          <div className="relative pl-8">
            <span className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-brand-green border-4 border-white shadow-lg"></span>
            <div className="bg-brand-green rounded-2xl p-7 shadow-card text-white">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display font-bold text-xl">Ben ve Cevizyon</h3>
                <span className="font-mono text-xs bg-white/15 text-white px-2 py-1 rounded border border-white/20">2025</span>
              </div>
              <p className="text-sm text-brand-cream leading-relaxed">
                Plaza hayatını bırakıp dedemin bahçesine döndüm. Yazılımcı titizliğiyle, üç kuşak emeği 
                Cevizyon markasıyla buluşturdum. Artık bu bahçeden çıkan her ceviz, 
                sizin sofranıza güvenle gidiyor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

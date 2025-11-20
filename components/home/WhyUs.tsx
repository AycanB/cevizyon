import { Shield, Leaf, Clock, Package } from 'lucide-react';

export default function WhyUs() {
  return (
    <section id="neden" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-ink">
            Neden Cevizyon?
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Binlerce ceviz satıcısı olabilir; ama bizim sadece bir bahçemiz ve tek bir sözümüz var: 
            Üç kuşaktır aynı toprak, sıfır taviz.
          </p>
        </div>
    
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-brand-softGray rounded-2xl p-5 border border-gray-100 shadow-card">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-green mb-4">
               <Shield className="w-5 h-5" strokeWidth={2} />
            </div>
            <h3 className="font-display font-bold text-lg mb-1">Üç Kuşak Güven</h3>
            <p className="text-sm text-gray-600">
              Dedemden babama, babamdan bana uzanan bir emek. Aynı toprak, aynı aile, aynı hassasiyet.
            </p>
          </div>
    
          <div className="bg-brand-softGray rounded-2xl p-5 border border-gray-100 shadow-card">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-green mb-4">
               <Leaf className="w-5 h-5" strokeWidth={2} />
            </div>
            <h3 className="font-display font-bold text-lg mb-1">Kimyasal Yok</h3>
            <p className="text-sm text-gray-600">
              Bahçemizde kimyasal ilaç kullanmıyoruz. Doğal gübreleme ve geleneksel yöntemlerle üretim yapıyoruz.
            </p>
          </div>
    
          <div className="bg-brand-softGray rounded-2xl p-5 border border-gray-100 shadow-card">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-green mb-4">
               <Clock className="w-5 h-5" strokeWidth={2} />
            </div>
            <h3 className="font-display font-bold text-lg mb-1">Yeni Hasat</h3>
            <p className="text-sm text-gray-600">
              Stokta yıllanmış ürün yok. Her sezon, o yılın hasadını hazırlayıp gönderiyoruz.
            </p>
          </div>
    
          <div className="bg-brand-softGray rounded-2xl p-5 border border-gray-100 shadow-card">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-green mb-4">
               <Package className="w-5 h-5" strokeWidth={2} />
            </div>
            <h3 className="font-display font-bold text-lg mb-1">Kırılmaya Karşı Dikkat</h3>
            <p className="text-sm text-gray-600">
              Paketleme ve kargoda ekstra özen gösteriyoruz. Boş, çürük veya ezilmiş ürün görürseniz 
              bizim için hata sayılır.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { CheckCircle } from 'lucide-react';

export default function PromiseSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 mb-24">
      <div className="bg-brand-cream/50 rounded-3xl p-8 md:p-12 text-center border border-brand-green/10">
        <h2 className="font-display text-3xl font-bold text-brand-ink mb-6">Benim Cevizdeki Sözüm</h2>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Karşınızda devasa bir şirket, ulaşılmaz bir CEO ya da soğuk bir marka logosu yok. Kanlı canlı, bu işe gönlünü vermiş, akşam eve gidince sizin yediğiniz cevizin aynısını kendi çocuklarına yediren <strong>Aycan</strong> var.
        </p>

        <div className="grid md:grid-cols-3 gap-4 text-left max-w-3xl mx-auto mb-8">
          <div className="bg-white p-4 rounded-xl flex items-start gap-3 shadow-sm">
            <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700 font-medium">Kendi soframa koymayacağım ürünü, sizin kutunuza koymam.</span>
          </div>
          <div className="bg-white p-4 rounded-xl flex items-start gap-3 shadow-sm">
            <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700 font-medium">Amacım sadece satmak değil, o ilk ısırıkta tebessüm ettirmek.</span>
          </div>
          <div className="bg-white p-4 rounded-xl flex items-start gap-3 shadow-sm">
            <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700 font-medium">Bir sorun olursa arkasında dururum; telafisini fazlasıyla yaparım.</span>
          </div>
        </div>

        <div className="inline-block relative">
          <p className="font-hand text-2xl text-brand-green rotate-2">
            "Bu benim size değil, önce kendime sözümdür."
          </p>
        </div>
      </div>
    </section>
  );
}


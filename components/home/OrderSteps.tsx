export default function OrderSteps() {
  return (
    <section className="py-20 bg-brand-cream/50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-ink mb-4">
          Sipariş Nasıl Verilir?
        </h2>
        <p className="text-gray-600 mb-10">
          Şimdilik her şey çok basit ve birebir iletişimle. Üç adımda cevizler bahçemizden kapınıza gelsin.
        </p>
    
        <div className="grid sm:grid-cols-3 gap-6 text-left sm:text-center">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center mb-3 mx-auto sm:mx-auto font-bold">
              1
            </div>
            <h3 className="font-display font-bold mb-1 text-brand-ink text-sm sm:text-base text-center">WhatsApp’tan Yazın</h3>
            <p className="text-xs sm:text-sm text-gray-600 text-center">
              Hangi üründen, kaç kilo istediğinizi WhatsApp üzerinden bize iletin.
            </p>
          </div>
    
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center mb-3 mx-auto font-bold">
              2
            </div>
            <h3 className="font-display font-bold mb-1 text-brand-ink text-sm sm:text-base text-center">Paketleyelim</h3>
            <p className="text-xs sm:text-sm text-gray-600 text-center">
              Seçtiğiniz ürünleri, bahçeden çıktıktan sonra özenle hazırlayıp paketleyelim.
            </p>
          </div>
    
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center mb-3 mx-auto font-bold">
              3
            </div>
            <h3 className="font-display font-bold mb-1 text-brand-ink text-sm sm:text-base text-center">Kargoya Verelim</h3>
            <p className="text-xs sm:text-sm text-gray-600 text-center">
              Adresinizi alalım, kargoya verelim. Takip numarasını size iletelim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

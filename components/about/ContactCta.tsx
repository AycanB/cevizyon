export default function ContactCta() {
  return (
    <section className="max-w-3xl mx-auto px-6 text-center pb-12">
      <h2 className="font-display text-2xl font-bold text-brand-ink mb-4">Bir "Selam" Demeniz Bile Yeter</h2>
      <p className="text-gray-600 mb-8 text-lg">
        Ceviz almak isterseniz başım üstüne. Toplu alım sormak isterseniz konuşalım. Ya da hiçbir şey almayıp, sadece "Kolay gelsin Aycan kardeşim, hikayeni okudum" demek isterseniz... İnanın bu hepsinden kıymetli.
        <br /><br />
        Telefonun ucunda tuşlamanız gereken numaralar yok. Direkt ben varım.
      </p>
      <a href="https://wa.me/90555XXXXXXX" target="_blank" className="inline-flex items-center gap-2 bg-brand-green text-white px-8 py-4 rounded-full text-base font-bold hover:bg-brand-darkGreen hover:shadow-lg hover:-translate-y-1 transition-all">
        <span>WhatsApp’tan Aycan’a Yaz</span>
      </a>
    </section>
  );
}


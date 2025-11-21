import { Quote } from 'lucide-react';

export default function CtrlZSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 mb-24">
      <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-brown via-brand-green to-brand-ink"></div>
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl font-bold text-brand-ink mb-4">"Toprakta Ctrl+Z Yoktur."</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Sabahları gün daha ağarmadan uyanıp çizmelerimi çekiyorum. Bazen elimde kürek, fidan çukuru açıyorum; bazen elimde makas, ağaçları buduyorum.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              Toprakla uğraşmak, bilgisayar başında olmaya hiç benzemez. Kod yazarken bir hata yaparsın, basarsın "Geri Al" tuşuna, siler düzeltirsin. Ama bahçede yanlış bir budama dalı küstürür, eksik bir gübreleme meyveyi zayıflatır. Toprakta "Ctrl+Z" yoktur, geri alamazsınız; hatanızla yüzleşir, ders alır, seneye beklersiniz.
            </p>
          </div>
          <div className="bg-brand-softGray p-6 rounded-2xl border border-brand-green/10 relative">
            <Quote className="absolute top-4 left-4 w-6 h-6 text-brand-green/20" />
            <p className="text-brand-ink font-medium leading-relaxed italic pl-4 pt-2">
              "Bu yüzden yazılımdaki o 'pixel-perfect' titizliğimi, şimdi her bir ceviz ağacına gösteriyorum. Akşam olup yorgunluk çökünce de bilgisayarımın başına geçiyorum; gündüz ne yaptıysam size onu anlatıyorum. Hem dijitalde hem toprakta tek kuralım var: <span className="text-brand-green font-bold not-italic">Eksik, çürük, baştan savma iş yok.</span>"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


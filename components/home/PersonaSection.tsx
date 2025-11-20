import { BookOpen, Shield } from 'lucide-react';

export default function PersonaSection() {
  return (
    <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-brand-softGray rounded-3xl p-8 border border-gray-100">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-brown mb-4 shadow-sm">
                        <BookOpen className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <h3 className="font-display font-bold text-xl mb-2">Yazılımcı Titizliği</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">Kod yazarken nasıl en ufak hatayı kabul etmiyorsam, bahçemde de öyleyim. Veriye dayalı sulama ve analizlerle, standardı hiç düşmeyen bir kalite sunuyorum.</p>
                </div>
                <div className="bg-green-50 rounded-3xl p-8 border border-green-100">
                    <div className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center text-white mb-4 shadow-sm">
                        <Shield className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <h3 className="font-display font-bold text-xl mb-2 text-brand-green">Çiftçi Emeği</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">Üç kuşaktır bu topraklardayız. Dedemden öğrendiğim geleneksel yöntemlerle, kimyasal kullanmadan, doğaya saygıyla üretim yapıyorum.</p>
                </div>
            </div>
        </div>
    </section>
  );
}


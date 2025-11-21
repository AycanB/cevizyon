import Image from 'next/image';
import { Video, Ruler } from 'lucide-react';

export default function InstagramPreview() {
  return (
    <section className="max-w-5xl mx-auto px-6 mb-24">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl font-bold text-brand-ink">Instagram’da Neler Var?</h2>
        <p className="text-gray-600 mt-2">Sosyal medyada "filtreli" hayatlar değil; bu işin tozunu, çamurunu ve gerçekliğini paylaşıyorum.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Social Item 1 */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="aspect-[9/16] bg-gray-100 rounded-xl mb-4 relative overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=400&auto=format&fit=crop"
              alt="İş makinesi ve çukur"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale mix-blend-multiply"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Video className="w-5 h-5 text-brand-green" fill="currentColor" />
              </div>
            </div>
          </div>
          <h4 className="font-bold text-brand-ink mb-1">Çukurları Neden 2 Metre?</h4>
          <p className="text-xs text-gray-500">"Herkes fidanı gömüp geçerken, biz kökler 10 yıl sonra rahat etsin diye 'apartman temeli' kazar gibi çukur açıyoruz."</p>
        </div>

        {/* Social Item 2 */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="aspect-[9/16] bg-gray-100 rounded-xl mb-4 relative overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1626263368061-d5c9574012b6?q=80&w=400&auto=format&fit=crop"
              alt="İple ölçüm"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale mix-blend-multiply"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Ruler className="w-5 h-5 text-brand-green" />
              </div>
            </div>
          </div>
          <h4 className="font-bold text-brand-ink mb-1">İple Ölçüm: Göz Kararı Olmaz</h4>
          <p className="text-xs text-gray-500">"Yazılımda 1 piksel kayarsa tasarım bozulur, tarlada 10 santim kayarsa ağaç güneş alamaz. Her şey nizami."</p>
        </div>

        {/* Social Item 3 */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="aspect-square bg-gray-100 rounded-xl mb-4 relative overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1535090467336-9501f96eef89?q=80&w=400&auto=format&fit=crop"
              alt="Aile fotoğrafı"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale mix-blend-multiply"
              unoptimized
            />
            <div className="absolute top-3 right-3 bg-brand-brown text-white text-[10px] font-bold px-2 py-1 rounded">POST</div>
          </div>
          <h4 className="font-bold text-brand-ink mb-1">Üç Kuşak, Tek Toprak</h4>
          <p className="text-xs text-gray-500">"Dedem fidanı dikti, babam büyüttü, ben dünyaya açıyorum. İsimler değişti ama niyetimiz hiç değişmedi."</p>
        </div>
      </div>
    </section>
  );
}


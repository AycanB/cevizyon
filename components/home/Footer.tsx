import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand-green/10 pt-16 pb-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="mb-8">
                <div className="font-hand text-3xl text-brand-green font-bold mb-2">Aycan'ın Notu</div>
                <p className="text-lg text-brand-ink leading-relaxed max-w-2xl mx-auto">
                    "Bu siteyi de ben kodladım, cevizleri de ben topladım. Sitede bir hata bulursanız bana yazın düzeltirim; <br /><span className="font-bold">ama cevizde hata bulamazsınız, ona kefilim.</span>"
                </p>
            </div>
            <div className="flex justify-center gap-6 mb-12">
                <Link href="#" className="text-gray-400 hover:text-brand-green transition-colors">Instagram</Link>
                <Link href="https://wa.me/90555XXXXXXX" className="text-gray-400 hover:text-brand-green transition-colors">WhatsApp</Link>
                <Link href="/ben-kimim" className="text-gray-400 hover:text-brand-green transition-colors">Ben Kimim?</Link>
            </div>
            <div className="text-xs text-gray-400 font-light">&copy; 2025 Cevizyon. Merzifon'dan sevgilerle.</div>
        </div>
    </footer>
  );
}


import Link from 'next/link';
import { Shield } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="glass-nav fixed w-full z-50 top-0 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="#" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                    <Shield className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                    <span className="font-display font-bold text-xl leading-none text-brand-ink tracking-tight">Cevizyon</span>
                    <span className="font-hand text-lg leading-none text-brand-brown font-bold">Aycan'ın Bahçesi</span>
                </div>
            </Link>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                <Link href="#neden" className="hover:text-brand-green transition-colors">Neden Biz?</Link>
                <Link href="#urunler" className="hover:text-brand-green transition-colors">Ürünler</Link>
                <Link href="#hikayem" className="hover:text-brand-green transition-colors">Hikayemiz</Link>
                <Link href="/ben-kimim" className="hover:text-brand-green transition-colors flex items-center gap-1">Ben Kimim?</Link>
            </div>
            <Link 
              href="https://wa.me/90555XXXXXXX" 
              className="flex items-center gap-2 bg-brand-green text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-brand-darkGreen hover:shadow-lg transition-all" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Sipariş Ver</span>
            </Link>
        </div>
    </nav>
  );
}

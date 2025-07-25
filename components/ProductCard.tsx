import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative h-[45vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/img/banner.jpg")'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-[#E2E8F0]">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Dimana Setiap Klopak
            <br />
            <span className="text-[#E2E8F0]">Menceritakan sebuah Kisah</span>
          </h1>
          <p className="text-base md:text-xl mb-8 text-gray-200">
            Karena Setiap Momen Layak Diberi Buket Terbaik
          </p>

          <Link href="/catalog">
            <Button
              size="lg"
              className="bg-[#7F1D1D] hover:bg-[#511D43] text-white px-6 py-2 text-base rounded-lg transition-colors"
            >
              Pesan Sekarang
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

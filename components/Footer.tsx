import Link from 'next/link';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="text-white"
      style={{ backgroundColor: '#1E293B' }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">LOFTY FLORIST</h3>
            <p className="text-sm" style={{ color: '#ffffff' }}>
              Kami menyediakan berbagai jenis buket bunga yang dirangkai dengan cinta dan ketulusan, untuk menemani setiap momen spesialmu mulai dari kebahagiaan hingga haru. Estetik, elegan, dan penuh makna.
            </p>
          </div>

          {/* Menu */}
<div>
  <h3 className="text-xl font-bold mb-4">MENU</h3>
  <nav className="space-y-2">
    <Link href="/" legacyBehavior>
      <a
        className="block text-[#ffffff] hover:text-[#DC2525] transition-colors"
      >
        Beranda
      </a>
    </Link>
    <Link href="/catalog" legacyBehavior>
      <a
        className="block text-[#ffffff] hover:text-[#DC2525] transition-colors"
      >
        Katalog
      </a>
    </Link>
    <Link href="/cart" legacyBehavior>
      <a
        className="block text-[#ffffff] hover:text-[#DC2525] transition-colors"
      >
        Pesan
      </a>
    </Link>
    <Link href="/contact" legacyBehavior>
      <a
        className="block text-[#ffffff] hover:text-[#DC2525] transition-colors"
      >
        Kontak
      </a>
    </Link>
  </nav>
</div>
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">KONTAK KAMI</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-[#ffffff] mt-1 flex-shrink-0" />
                <p className="text-sm" style={{ color: '#ffffff' }}>
                  Jakarta, Indramayu Indonesia
                </p> 
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-[#ffffff] mt-1 flex-shrink-0" />
                <p className="text-sm" style={{ color: '#ffffff' }}>
                  info@loftyflorist.com
                </p> 
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-[#ffffff] mt-1 flex-shrink-0" />
                <p className="text-sm" style={{ color: '#ffffff' }}>
                  +62 812 3456 7890
                  </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2025 Lofty Florist. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

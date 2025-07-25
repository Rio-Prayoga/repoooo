'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X, Home, Package, ShoppingCart, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-white sticky top-0 z-50" style={{ backgroundColor: '#1E293B' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/img/logo.png"
                alt="Lofty Florist Logo"
                className="w-12 h-12 object-contain"
            />
            <span className="text-xl font-bold">Lofty Florist</span>
          </Link>


          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari Buket"
                className="w-full pl-10 pr-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-1 hover:text-[#DC2525] transition-colors">
              <Home className="w-5 h-5" />
              <span>Beranda</span>
            </Link>
            <Link href="/catalog" className="flex items-center space-x-1 hover:text-[#DC2525] transition-colors">
              <Package className="w-5 h-5" />
              <span>Katalog</span>
            </Link>
            <Link href="/cart" className="flex items-center space-x-1 hover:text-[#DC2525] transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span>Pesan</span>
            </Link>
            <Link href="/contact" className="flex items-center space-x-1 hover:text-[#DC2525] transition-colors">
              <Phone className="w-5 h-5" />
              <span>Kontak</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari Bouquet"
                className="w-full pl-10 pr-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-3">
              <Link href="/" className="flex items-center space-x-2 hover:text-[#DC2525] transition-colors" onClick={() => setIsMenuOpen(false)}>
                <Home className="w-5 h-5" />
                <span>Beranda</span>
              </Link>
              <Link href="/catalog" className="flex items-center space-x-2 hover:text-[#DC2525] transition-colors" onClick={() => setIsMenuOpen(false)}>
                <Package className="w-5 h-5" />
                <span>Katalog</span>
              </Link>
              <Link href="/cart" className="flex items-center space-x-2 hover:text-[#DC2525] transition-colors" onClick={() => setIsMenuOpen(false)}>
                <ShoppingCart className="w-5 h-5" />
                <span>Pesan</span>
              </Link>
              <Link href="/contact" className="flex items-center space-x-2 hover:text-[#DC2525] transition-colors" onClick={() => setIsMenuOpen(false)}>
                <Phone className="w-5 h-5" />
                <span>Kontak</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

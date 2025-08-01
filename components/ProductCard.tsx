'use client';

import { Button } from '@/components/ui/button';
import { ShoppingCart, MessageCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useRef, useState } from 'react';
import { useNotification } from '@/components/context/NotificationContext';
import { useRouter } from 'next/navigation'; // ✅ Tambahkan ini

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { showNotification } = useNotification();
  const [flyImages, setFlyImages] = useState<{ id: number; from: DOMRect; to: DOMRect; image: string }[]>([]);
  const imageRef = useRef<HTMLImageElement>(null);
  const router = useRouter(); // ✅ Inisialisasi router

  const handleRedirectToCheckout = () => {
    router.push('/checkout'); // ✅ Arahkan ke form checkout
  };

  const handleAddToCart = () => {
    const cartIconElement = document.getElementById('cart-icon');
    if (imageRef.current && cartIconElement) {
      const from = imageRef.current.getBoundingClientRect();
      const to = cartIconElement.getBoundingClientRect();
      setFlyImages((prev) => [...prev, { id: Date.now(), from, to, image: product.image }]);
    }

    addToCart(product);
    showNotification('Produk telah ditambahkan ke keranjang!');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative">
      <div className="relative">
        <img
          ref={imageRef}
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        {product.originalPrice && (
          <div className="absolute top-4 left-4 bg-[#DC2525] text-white px-3 py-1 rounded-full text-sm font-bold">
            Promo
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-sm sm:text-lg font-bold text-gray-800 mb-2">{product.name}</h3>

        <div className="mb-4">
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-xs sm:text-sm mr-2">
              Rp.{product.originalPrice.toLocaleString()}
            </span>
          )}
          <span className="text-lg sm:text-2xl font-bold text-[#000000]">
            Rp.{product.price.toLocaleString()}
          </span>
        </div>

        <div className="flex space-x-2">
          <Button
            onClick={handleRedirectToCheckout} // ✅ Ganti handler
            className="flex-1 text-xs px-2 py-1 sm:text-sm sm:px-4 sm:py-2 bg-[#7F1D1D] hover:bg-[#511D43] text-white transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Pesan via WA
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleAddToCart}
            className="border-[#7F1D1D] text-[#7F1D1D] hover:bg-[#511D43] hover:text-white transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

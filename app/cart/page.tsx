'use client';

import { Plus, Minus } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const router = useRouter();
  const recommendedProducts = products.slice(0, 3);

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const toggleSelect = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const getTotal = () => {
    return cartItems
      .filter((item) => selectedItems.includes(item.id))
      .reduce((sum, item) => sum + item.price * (item.quantity ?? 1), 0);
  };

  const handleCheckout = () => {
    if (selectedItems.length === 0) {
      alert('Pilih minimal 1 produk untuk checkout!');
      return;
    }
    router.push('/checkout');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <div className="relative h-64 bg-gradient-to-r from-pink-200 to-yellow-200 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: 'url("/img/banner.jpg")' }}
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl font-bold text-gray-800">Keranjang</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {cartItems.length === 0 ? (
          <div className="text-center text-gray-600 text-xl mt-16">
            Keranjang belanjamu kosong.
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
              Isi Keranjang Kamu
            </h2>

            <div className="space-y-6 mb-16">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow p-4 flex flex-col sm:flex-row sm:items-center gap-4 relative"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => toggleSelect(item.id)}
                      className="w-5 h-5 accent-pink-500 mt-1 sm:mt-0"
                    />
                    <img
                      src={item.image || '/placeholder.jpg'}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-pink-600 font-bold">
                      Rp{item.price.toLocaleString()}
                    </p>
                    <div className="flex items-center mt-2 space-x-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, Math.max((item.quantity ?? 1) - 1, 1))
                        }
                        className="bg-gray-200 rounded px-2 py-1 text-sm"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span>{item.quantity ?? 1}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, (item.quantity ?? 1) + 1)
                        }
                        className="bg-gray-200 rounded px-2 py-1 text-sm"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm"
                  >
                    Hapus
                  </button>
                </div>
              ))}
            </div>

            {/* Total dan Checkout */}
            <div className="bg-white shadow rounded-lg p-6 flex flex-col md:flex-row justify-between items-center sticky bottom-0">
              <div className="text-lg font-semibold text-gray-700 mb-4 md:mb-0">
                Total: Rp{getTotal().toLocaleString()}
              </div>
              <button
                onClick={handleCheckout}
                className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition"
              >
                Checkout ({selectedItems.length})
              </button>
            </div>
          </>
        )}

        {/* Rekomendasi */}
        <div className="mt-20 bg-pink-50 py-16 rounded-lg">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-gray-800">Rekomendasi untuk kamu</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-4">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

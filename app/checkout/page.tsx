'use client';

import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CheckoutPage() {
  const { cartItems } = useCart();
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const shippingCost = 15000;
  const bonusPoint = Math.floor(totalPrice * 0.03);

  const router = useRouter();

  const [form, setForm] = useState({
    namaPengirim: '',
    email: '',
    telpPengirim: '',
    namaPenerima: '',
    telpPenerima: '',
    alamat: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Checkout data:', form);
    router.push('/pembayaran');
  };

  return (
    <div className="container mx-auto px-4 py-16 grid md:grid-cols-3 gap-12">
      <form onSubmit={handleSubmit} className="md:col-span-2 space-y-10">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Kontak Anda</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              required
              name="namaPengirim"
              placeholder="Nama Depan dan Belakang Anda *"
              value={form.namaPengirim}
              onChange={handleChange}
              className="border rounded p-3 w-full"
            />
            <input
              required
              name="email"
              type="email"
              placeholder="Alamat Email Anda *"
              value={form.email}
              onChange={handleChange}
              className="border rounded p-3 w-full"
            />
            <input
              required
              name="telpPengirim"
              placeholder="Nomor Telepon Anda *"
              value={form.telpPengirim}
              onChange={handleChange}
              className="border rounded p-3 w-full md:col-span-2"
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Penerima</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              required
              name="namaPenerima"
              placeholder="Nama Depan dan Belakang *"
              value={form.namaPenerima}
              onChange={handleChange}
              className="border rounded p-3 w-full"
            />
            <input
              required
              name="telpPenerima"
              placeholder="Nomor Telepon Penerima *"
              value={form.telpPenerima}
              onChange={handleChange}
              className="border rounded p-3 w-full"
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Informasi Pengiriman</h2>
          <input
            required
            name="alamat"
            placeholder="Alamat lengkap pengiriman"
            value={form.alamat}
            onChange={handleChange}
            className="border rounded p-3 w-full"
          />
        </div>
      </form>

      <div className="bg-white rounded-lg shadow p-6 space-y-4 h-fit">
        <h3 className="text-xl font-semibold text-gray-800">Ringkasan Pesanan</h3>
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <span>{item.name}</span>
            <span>Rp{item.price.toLocaleString()}</span>
          </div>
        ))}

        <div className="flex justify-between pt-4 border-t">
          <span className="font-medium text-gray-700">Pengiriman</span>
          <span className="text-gray-800">Rp{shippingCost.toLocaleString()}</span>
        </div>

        <div className="flex justify-between font-semibold text-lg text-gray-800 border-t pt-4">
          <span>Total</span>
          <span>Rp{(totalPrice + shippingCost).toLocaleString()}</span>
        </div>

        <div className="text-sm text-gray-500">
          Poin bonus: Rp{bonusPoint.toFixed(2)}
        </div>

        <input placeholder="Kode Promo" className="w-full border rounded p-2 mt-2" />
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-pink-600 text-white w-full py-3 rounded-lg mt-4 hover:bg-pink-700 transition"
        >
          Pesan dan Lanjutkan ke Pembayaran
        </button>
      </div>
    </div>
  );
}

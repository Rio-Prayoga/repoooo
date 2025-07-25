'use client';

import { useCart } from '@/context/CartContext';
import { useState, useEffect } from 'react';

export default function CheckoutPage() {
  const { cartItems } = useCart();

  const [form, setForm] = useState({
    namaPengirim: '',
    email: '',
    telpPengirim: '',
    namaPenerima: '',
    telpPenerima: '',
    alamat: '',
    jarak: '',
  });

  const [sameAsSender, setSameAsSender] = useState(false);
  const [errors, setErrors] = useState({} as any);

  const shippingCost = (() => {
    const jarak = parseFloat(form.jarak);
    if (jarak <= 5) return 10000;
    else if (jarak <= 10) return 20000;
    else return 30000;
  })();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  const bonusPoint = Math.floor(totalPrice * 0.03);

  useEffect(() => {
    if (sameAsSender) {
      setForm((prev) => ({
        ...prev,
        namaPenerima: prev.namaPengirim,
        telpPenerima: prev.telpPengirim,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        namaPenerima: '',
        telpPenerima: '',
      }));
    }
  }, [sameAsSender]);

  const validate = () => {
    const err: any = {};
    if (!form.namaPengirim.trim()) err.namaPengirim = 'Nama wajib diisi';
    if (!/\S+@\S+\.\S+/.test(form.email)) err.email = 'Email tidak valid';
    if (!/^\d+$/.test(form.telpPengirim)) err.telpPengirim = 'No HP hanya boleh angka';
    if (!form.namaPenerima.trim()) err.namaPenerima = 'Nama penerima wajib';
    if (!/^\d+$/.test(form.telpPenerima)) err.telpPenerima = 'No HP penerima hanya boleh angka';
    if (!form.alamat.trim()) err.alamat = 'Alamat wajib';
    if (!form.jarak) err.jarak = 'Pilih estimasi jarak';

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const text = `*Checkout Pesanan*\n
*Produk:*\n${cartItems
      .map((item) => `- ${item.name} x${item.quantity} = Rp${item.price.toLocaleString()}`)
      .join('\n')}
\n*Alamat:* ${form.alamat}
*Estimasi Jarak:* ${form.jarak} km
*Ongkir:* Rp${shippingCost.toLocaleString()}
*Total:* Rp${(totalPrice + shippingCost).toLocaleString()}
\n*Pengirim:* ${form.namaPengirim} (${form.telpPengirim})
*Email:* ${form.email}
\n*Penerima:* ${form.namaPenerima} (${form.telpPenerima})`;

    const whatsappURL = `https://wa.me/6285840469673?text=${encodeURIComponent(text)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-16 grid md:grid-cols-3 gap-12">
      <div className="md:col-span-2 space-y-10">
        {/* Kontak Pengirim */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Kontak Anda</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="namaPengirim" placeholder="Nama Lengkap *" value={form.namaPengirim} onChange={handleChange} className="border rounded p-3 w-full" />
            {errors.namaPengirim && <span className="text-red-500 text-sm">{errors.namaPengirim}</span>}

            <input name="email" type="email" placeholder="Email *" value={form.email} onChange={handleChange} className="border rounded p-3 w-full" />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

            <input name="telpPengirim" placeholder="No WhatsApp *" value={form.telpPengirim} onChange={handleChange} className="border rounded p-3 w-full md:col-span-2" />
            {errors.telpPengirim && <span className="text-red-500 text-sm">{errors.telpPengirim}</span>}
          </div>
        </div>

        {/* Penerima */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Penerima</h2>
          <label className="flex items-center gap-2 mb-4">
            <input type="checkbox" checked={sameAsSender} onChange={(e) => setSameAsSender(e.target.checked)} />
            Data penerima sama
          </label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="namaPenerima"
              placeholder="Nama Penerima *"
              value={form.namaPenerima}
              onChange={handleChange}
              disabled={sameAsSender}
              className={`border rounded p-3 w-full ${sameAsSender ? 'bg-gray-100 cursor-not-allowed text-gray-500' : ''}`}
            />
            {errors.namaPenerima && <span className="text-red-500 text-sm">{errors.namaPenerima}</span>}

            <input
              name="telpPenerima"
              placeholder="No HP Penerima *"
              value={form.telpPenerima}
              onChange={handleChange}
              disabled={sameAsSender}
              className={`border rounded p-3 w-full ${sameAsSender ? 'bg-gray-100 cursor-not-allowed text-gray-500' : ''}`}
            />
            {errors.telpPenerima && <span className="text-red-500 text-sm">{errors.telpPenerima}</span>}
          </div>
        </div>

        {/* Alamat */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Alamat Pengiriman</h2>
          <input name="alamat" placeholder="Alamat lengkap *" value={form.alamat} onChange={handleChange} className="border rounded p-3 w-full mb-2" />
          {errors.alamat && <span className="text-red-500 text-sm">{errors.alamat}</span>}

          <div className="mt-4">
            <h3 className="mb-2 font-medium">Pilih estimasi jarak ke toko (km):</h3>
            <select name="jarak" value={form.jarak} onChange={handleChange} className="border rounded p-2 w-full">
              <option value=""> Pilih Jarak </option>
              <option value="3">1 - 5 km</option>
              <option value="7">6 - 10 km</option>
              <option value="15">11+ km</option>
            </select>
            {errors.jarak && <span className="text-red-500 text-sm">{errors.jarak}</span>}
          </div>

          <div className="mt-4">
            <h3 className="mb-2 font-medium">Lokasi Map Toko (simulasi):</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.36370205287!2d110.24444504711418!3d-7.795579822419726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5780ac7b49b1%3A0x1de7f66d30c9c5ab!2sYogyakarta!5e0!3m2!1sen!2sid!4v1652708870767!5m2!1sen!2sid"
              width="100%"
              height="200"
              allowFullScreen
              loading="lazy"
              className="rounded"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Ringkasan Pesanan */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4 h-fit">
        <h3 className="text-xl font-semibold text-gray-800">Ringkasan Pesanan</h3>
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between">
            <span>{item.name}</span>
            <span>Rp{item.price.toLocaleString()}</span>
          </div>
        ))}
        <div className="flex justify-between pt-2 border-t">
          <span>Ongkir</span>
          <span>Rp{shippingCost.toLocaleString()}</span>
        </div>
        <div className="flex justify-between font-semibold border-t pt-2">
          <span>Total</span>
          <span>Rp{(totalPrice + shippingCost).toLocaleString()}</span>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-green-600 hover:bg-green-700 text-white w-full py-3 rounded-lg mt-4 transition"
        >
          Kirim via WhatsApp
        </button>
      </div>
    </div>
  );
}

import { Clock, DollarSign, Award } from 'lucide-react';

const services = [
  {
    icon: Clock,
    title: 'Proses Cepat & Mudah',
    description: 'Pengiriman cepat dan pemesanan yang mudah untuk kemudahan kamu.'
  },
  {
    icon: DollarSign,
    title: 'Harga Murah',
    description: 'Dengan kenyamanan menarik selembar dengan harga terjangkau.'
  },
  {
    icon: Award,
    title: 'Barang Berkualitas',
    description: 'Menggunakan bahan pilihan yang dirangkai dengan penuh ketelitian.'
  }
];

export default function ServiceSection() {
  return (
    <section className="py-12 bg-[#3C5675] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-2">
          Melayani 24 Jam, Cepat,
        </h2>
        <p className="text-lg mb-6 text-white">
          Pengiriman wilayah Jakarta dan Indramayu.
        </p>

        <p className="text-white mb-10 max-w-3xl mx-auto leading-relaxed text-base">
          Kami dengan senang hati menyajikan pemesanan terbaik menggunakan bunga, snack, dan lainnya. 
          Terkenal dengan pelayanan istimewa kami yang selalu siap memenuhi kebutuhan Anda dengan kualitas terbaik. 
          Kami juga memberikan diskon spesial bagi pelanggan setia dan anggota baru. 
          Layanan cepat, responsif, dan ramah adalah prioritas kami.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-3">
                <service.icon className="w-10 h-10 text-[#901E3E]" />
              </div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

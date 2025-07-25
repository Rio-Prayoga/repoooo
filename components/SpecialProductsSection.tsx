import { Button } from '@/components/ui/button';

const specialProducts = [
  {
    id: 1,
    name: 'BUKET ARTIFICIAL',
    description: 'Unfailing Love Bouquet',
    image: '/img/sp1.jpeg'
  },
  {
    id: 2,
    name: 'BUKET AKRILIK',
    description: 'Sweet and Beautiful Flowers',
    image: '/img/sp2.jpeg'
  },
  {
    id: 3,
    name: 'BUKET MONEY',
    description: 'Sweet and Beautiful Flowers',
    image: '/img/sp3.jpeg'
  },
  {
    id: 4,
    name: 'BUKET GRADUATION',
    description: 'Perfect for Wisuda Moment',
    image: '/img/sp4.jpeg'
  },
];

export default function SpecialProductsSection() {
  return (
    <section className="py-12 bg-[#3C5675] text-[#ffffff]">
      <div className="max-w-[1280px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          Produk Spesial
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {specialProducts.map((product) => (
            <div key={product.id} className="text-center">
              <div className="relative mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[250px] h-[250px] mx-auto rounded-lg object-cover shadow-lg"
                />
              </div>
              <h3 className="text-lg font-bold mb-1">{product.name}</h3>
              <p className="text-sm text-white mb-3 italic">{product.description}</p>
              <Button 
                variant="outline" 
                className="border-[#1E293B] text-[#000000] hover:bg-[#1E293B] hover:text-[#ffffff] transition-colors"
              >
                Lihat Detail
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

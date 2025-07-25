'use client';

import { useEffect, useRef } from 'react';
import ProductCard from './ProductCard';
import { products } from '@/lib/data';

export default function PromoSection() {
  const promoProducts = products.filter((p) => p.originalPrice);
  const repeated = [...promoProducts, ...promoProducts, ...promoProducts];
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.scrollLeft = 250; // geser ke kartu tengah
    }
  }, []);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const maxScroll = 250 * promoProducts.length;

    if (container.scrollLeft <= 10) {
      container.scrollLeft += maxScroll;
    } else if (container.scrollLeft >= maxScroll * 2) {
      container.scrollLeft -= maxScroll;
    }
  };

  return (
    <section className="pt-4 pb-8 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#1E293B] mb-8">
          Sedang Promo
        </h2>

        {/* Scrollable carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="overflow-x-auto scrollbar-hide px-4 -mx-4"
        >
          <div className="flex gap-5 justify-center sm:justify-start px-[calc((100vw-250px)/2)] sm:px-0">
            {repeated.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="w-[250px] flex-shrink-0"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

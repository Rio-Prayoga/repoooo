'use client';

import { testimonials } from '@/lib/data';
import { Star } from 'lucide-react';

export default function TestimonialSection() {
  return (
    <section className="pt-6 pb-12 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#1E293B] mb-6">
          Testimoni Pelanggan Kami
        </h2>

        {/* Scrollable container */}
        <div className="overflow-x-auto scrollbar-hide px-4 -mx-4">
          <div
            className="flex gap-5 px-[calc((100vw-270px)/2)] sm:px-0"
            style={{
              width: `${270 * testimonials.length}px`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-[250px] min-h-[320px] flex-shrink-0 bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow flex flex-col justify-between"
              >
                {/* Rating */}
                <div className="flex mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`mr-1 ${
                        i < testimonial.rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Isi Testimoni */}
                <p className="text-gray-600 italic mb-4 leading-relaxed flex-1">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* User Info */}
                <div className="flex items-center mt-4">
                  <div className="w-12 h-12 bg-[#648DB3] rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name?.charAt(0) || 'U'}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

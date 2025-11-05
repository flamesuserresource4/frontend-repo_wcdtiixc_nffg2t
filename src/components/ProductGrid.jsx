import React from 'react';
import { Plus } from 'lucide-react';

const products = [
  {
    id: 'classic-oat',
    name: 'Classic Oat',
    desc: 'Golden, chewy, and perfectly simple.',
    price: 2.5,
    image: 'https://images.unsplash.com/photo-1728487893807-e8963a2eeb13?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDbGFzc2ljJTIwT2F0fGVufDB8MHx8fDE3NjIzNDU2MzF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 'choco-chip-oat',
    name: 'Choco Chip Oat',
    desc: 'Loaded with dark chocolate chunks.',
    price: 3.0,
    image: 'https://images.unsplash.com/photo-1616662707741-9f32deea4863?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaG9jbyUyMENoaXAlMjBPYXR8ZW58MHwwfHx8MTc2MjM0NTYzMXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 'cranberry-oat',
    name: 'Cranberry Oat',
    desc: 'Tart cranberries and orange zest.',
    price: 3.25,
    image: 'https://images.unsplash.com/photo-1633360821154-1935fb5671e6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDcmFuYmVycnklMjBPYXR8ZW58MHwwfHx8MTc2MjM0NTYzMnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 'vegan-gf-oat',
    name: 'Vegan + GF Oat',
    desc: 'Plant-based, gluten-free goodness.',
    price: 3.5,
    image: 'https://images.unsplash.com/photo-1647577919302-68d2d3033586?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxWZWdhbiUyMCUyQiUyMEdGJTIwT2F0fGVufDB8MHx8fDE3NjIzNDU2MzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 'espresso-oat',
    name: 'Espresso Oat',
    desc: 'A coffee-kissed cookie for grown-ups.',
    price: 3.25,
    image: 'https://images.unsplash.com/photo-1714556142699-e2c62d743d9a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFc3ByZXNzbyUyME9hdHxlbnwwfDB8fHwxNzYyMzQ1NjMzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 'pb-oat',
    name: 'Peanut Butter Oat',
    desc: 'Roasted peanut butter swirl.',
    price: 3.0,
    image: 'https://images.unsplash.com/photo-1595231583150-8c16ea4bc04b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQZWFudXQlMjBCdXR0ZXIlMjBPYXR8ZW58MHwwfHx8MTc2MjM0NTYzM3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  }
];

const ProductGrid = ({ onAdd }) => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Freshly baked every morning</h2>
        <p className="text-neutral-600 mt-2">Choose your favorites and we’ll pack them warm.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="group rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm hover:shadow-md transition">
            <div className="relative h-48 overflow-hidden">
              <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-lg">{p.name}</h3>
                  <p className="text-sm text-neutral-600">{p.desc}</p>
                </div>
                <span className="font-semibold">${p.price.toFixed(2)}</span>
              </div>
              <button
                onClick={() => onAdd(p)}
                className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-amber-500 text-white hover:bg-amber-600 transition"
              >
                <Plus className="w-4 h-4" /> Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;

import React, { useMemo, useState } from 'react';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [items, setItems] = useState([]);

  const cartCount = useMemo(() => items.reduce((n, it) => n + it.qty, 0), [items]);

  const handleAdd = (product) => {
    setItems((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const handleUpdateQty = (id, qty) => {
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, qty } : p)));
  };

  const handleRemove = (id) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  const handleClear = () => setItems([]);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Hero */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-white to-rose-50" aria-hidden />
        <Header cartCount={cartCount} onCartToggle={() => setCartOpen(true)} />
        <section className="relative max-w-6xl mx-auto px-4 pt-10 pb-8 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-block text-xs font-medium tracking-wider uppercase text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full">New</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              Chewy oat cookies, baked to order
            </h2>
            <p className="mt-3 text-neutral-600 text-lg">
              Crafted from stone-milled oats, browned butter, and just the right pinch of sea salt. Mix and match your box.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <button onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })} className="px-5 py-3 rounded-lg bg-amber-500 text-white hover:bg-amber-600 transition font-medium">
                Shop cookies
              </button>
              <button onClick={() => setCartOpen(true)} className="px-5 py-3 rounded-lg border border-neutral-300 hover:bg-white transition font-medium">
                View cart ({cartCount})
              </button>
            </div>
            <p className="mt-3 text-sm text-neutral-500">Free local delivery on orders over $25.</p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-neutral-200 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&w=1600&auto=format&fit=crop"
                alt="Freshly baked oat cookies"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>

      <ProductGrid onAdd={handleAdd} />

      <section className="max-w-6xl mx-auto px-4 pb-10">
        <div className="rounded-2xl border border-neutral-200 p-6 bg-white">
          <h3 className="font-semibold text-lg">In‑app purchase</h3>
          <p className="text-sm text-neutral-600 mt-1">
            This demo includes a simulated checkout that completes your order in-app. To enable real payments
            later, we’ll connect a secure payment provider and process orders on the server.
          </p>
        </div>
      </section>

      <Footer />

      <Cart
        open={cartOpen}
        items={items}
        onClose={() => setCartOpen(false)}
        onUpdateQty={handleUpdateQty}
        onRemove={handleRemove}
        onClear={handleClear}
      />
    </div>
  );
}

export default App;

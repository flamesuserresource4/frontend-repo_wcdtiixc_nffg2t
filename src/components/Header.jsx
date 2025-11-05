import React from 'react';
import { ShoppingCart, Cookie } from 'lucide-react';

const Header = ({ cartCount, onCartToggle }) => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-amber-100 text-amber-700">
            <Cookie className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight">Oat & Oven</h1>
            <p className="text-xs text-neutral-500 -mt-0.5">Small-batch oat cookies</p>
          </div>
        </div>
        <button
          onClick={onCartToggle}
          className="relative inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition"
          aria-label="Open cart"
        >
          <ShoppingCart className="w-5 h-5" />
          <span className="text-sm font-medium">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 text-[10px] bg-amber-500 text-white rounded-full px-1.5 py-0.5">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;

import React, { useMemo, useState } from 'react';
import { X, Plus, Minus, Trash2, Check } from 'lucide-react';

const Cart = ({ open, items, onClose, onUpdateQty, onRemove, onClear }) => {
  const [checkingOut, setCheckingOut] = useState(false);
  const [success, setSuccess] = useState(false);

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);
    const tax = subtotal * 0.08;
    const total = subtotal + tax;
    return { subtotal, tax, total };
  }, [items]);

  const fakeCheckout = async () => {
    if (items.length === 0) return;
    setCheckingOut(true);
    setSuccess(false);
    await new Promise((r) => setTimeout(r, 1200));
    setCheckingOut(false);
    setSuccess(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSuccess(false);
    onClear();
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-30 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-2xl border-l border-neutral-200 transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="p-4 flex items-center justify-between border-b">
          <h3 className="text-lg font-semibold">Your Cart</h3>
          <button onClick={onClose} className="p-2 rounded-md hover:bg-neutral-100">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="h-[calc(100%-200px)] overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <p className="text-neutral-500 text-sm">Your cart is empty. Add some cookies!</p>
          ) : (
            items.map((it) => (
              <div key={it.id} className="flex items-center gap-3 border border-neutral-200 rounded-xl p-3">
                <img src={it.image} alt={it.name} className="w-16 h-16 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{it.name}</p>
                  <p className="text-sm text-neutral-600">${it.price.toFixed(2)}</p>
                  <div className="mt-2 inline-flex items-center gap-2">
                    <button
                      onClick={() => onUpdateQty(it.id, Math.max(1, it.qty - 1))}
                      className="p-1 rounded-md border hover:bg-neutral-50"
                      aria-label={`Decrease quantity of ${it.name}`}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-sm font-medium w-6 text-center">{it.qty}</span>
                    <button
                      onClick={() => onUpdateQty(it.id, it.qty + 1)}
                      className="p-1 rounded-md border hover:bg-neutral-50"
                      aria-label={`Increase quantity of ${it.name}`}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(it.id)}
                  className="p-2 rounded-md border hover:bg-red-50 text-red-600"
                  aria-label={`Remove ${it.name}`}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-600">Subtotal</span>
            <span className="font-medium">${totals.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-600">Tax</span>
            <span className="font-medium">${totals.tax.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between text-base font-semibold">
            <span>Total</span>
            <span>${totals.total.toFixed(2)}</span>
          </div>
          <button
            onClick={fakeCheckout}
            disabled={items.length === 0 || checkingOut}
            className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white transition ${
              items.length === 0 || checkingOut ? 'bg-neutral-300 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700'
            }`}
          >
            {success ? (
              <>
                <Check className="w-4 h-4" /> Order placed!
              </>
            ) : checkingOut ? (
              <>
                <span className="animate-spin inline-block w-4 h-4 border-2 border-white/60 border-t-white rounded-full" />
                Processing...
              </>
            ) : (
              <>Checkout</>
            )}
          </button>
          <p className="text-xs text-neutral-500">
            For demo purposes, checkout simulates an in-app purchase. Payment integration can be enabled later.
          </p>
        </div>
      </aside>
    </div>
  );
};

export default Cart;

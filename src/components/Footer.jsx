import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-neutral-600">
        <p>© {new Date().getFullYear()} Oat & Oven. Baked with love and oats.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-neutral-900">Privacy</a>
          <a href="#" className="hover:text-neutral-900">Terms</a>
          <a href="#" className="hover:text-neutral-900">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

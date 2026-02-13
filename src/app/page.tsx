import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ImpactCalculator from '@/components/ImpactCalculator';
import NGOSearch from '@/components/NGOSearch';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <Hero />

      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 italic">Your Impact Matters</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Every kilogram of food saved is a step towards a zero-waste future and a hunger-free world. Calculate your potential contribution below.
            </p>
          </div>
          <ImpactCalculator />
        </div>
      </section>

      <NGOSearch />

      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to become a Food Rescue Hero?</h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
            Join our fleet of volunteers and help bridge the gap between surplus food and those who need it most.
          </p>
          <button className="px-12 py-4 bg-white text-emerald-600 font-black rounded-full hover:bg-slate-100 transition-all shadow-2xl">
            JOIN THE FLEET
          </button>
        </div>
      </section>

      <footer className="py-12 bg-slate-900 text-white border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold mb-4">Plate<span className="text-emerald-500">2</span>Purpose</div>
          <p className="text-slate-400 text-sm mb-8">© 2026 Plate to Purpose. Fighting hunger, one plate at a time.</p>
          <div className="flex justify-center gap-6 text-slate-500 text-xs">
            <a href="#" className="hover:text-emerald-500">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-500">Terms of Service</a>
            <a href="#" className="hover:text-emerald-500">Contact Us</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

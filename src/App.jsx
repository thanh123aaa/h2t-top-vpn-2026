import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroVpnBanner from './components/HeroVpnBanner';
import ComparisonTable from './components/ComparisonTable';
import WhyVpnSection from './components/WhyVpnSection';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import { X, Check, ShieldCheck, Zap, Lock, Sparkles } from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVpn, setSelectedVpn] = useState(null);
  const [timeLeft, setTimeLeft] = useState(899); // 14:59 countdown

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 899));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleGetVpnClick = (vpn = null) => {
    setSelectedVpn(vpn || { name: 'VPNScope Bundle', price: '$2.49', extra: '+ 3 Mo. FREE' });
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-[#0F172A] flex flex-col font-sans">
      
      {/* Main Navigation Header */}
      <Header onGetVpnClick={() => handleGetVpnClick()} />

      {/* Main Content Sections */}
      <main className="flex-grow space-y-6">
        
        {/* 1. Hero Promo Banner matching vpnscope_merged_mockup.png */}
        <HeroVpnBanner onGetVpnClick={() => handleGetVpnClick()} />

        {/* 2. Top VPN Services Comparison Table */}
        <ComparisonTable onSelectVpn={(vpn) => handleGetVpnClick(vpn)} />

        {/* 3. Why VPNScope — Feature Grid + Why VPN Makes Sense */}
        <WhyVpnSection />

        {/* 4. Pricing Plans */}
        <PricingSection onSelectPlan={(plan) => handleGetVpnClick({ name: plan.name, price: plan.price })} />

        {/* 5. Frequently Asked Questions Accordion */}
        <FaqSection />

      </main>

      {/* Footer */}
      <Footer />

      {/* Surfshark-Style Plan Checkout Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-[460px] w-full shadow-2xl relative border-2 border-[#00C4BC] overflow-hidden flex flex-col">
            
            {/* Top Teal Banner */}
            <div className="bg-[#00C4BC] text-white py-2.5 px-6 text-center text-xs font-extrabold uppercase tracking-wide">
              Most popular
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2.5 right-4 text-white/90 hover:text-white p-1 rounded-full hover:bg-black/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Top Body */}
            <div className="p-8 sm:p-9 flex flex-col">
              {/* Plan Title */}
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-2xl font-extrabold text-[#0F172A] mb-3">
                {selectedVpn?.name || 'VPNScope One'}
              </h3>

              {/* Big Price */}
              <div className="flex items-baseline gap-1.5 mb-1.5">
                <span className="text-4xl sm:text-5xl font-black text-[#0F172A] tracking-tight leading-none">
                  {selectedVpn?.price || '$2.79'}
                </span>
                <span className="text-slate-500 text-base font-semibold">/mo.</span>
              </div>

              {/* Extra Months Highlight */}
              <p className="text-[#FF385C] font-extrabold text-base mb-2">
                +3 EXTRA months
              </p>

              {/* Note */}
              <p className="text-slate-400 text-xs leading-relaxed mb-7">
                $75.33 for the first 27 months (VAT may apply).
              </p>

              {/* CTA Button — Teal with dark border */}
              <button
                onClick={() => {
                  alert('Redirecting to VPNScope Secure Checkout...');
                  setIsModalOpen(false);
                }}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                className="w-full bg-[#00C4BC] hover:bg-[#00b0a8] text-[#0F172A] border-2 border-[#0F172A] py-4 px-6 rounded-2xl font-extrabold text-base tracking-wide shadow-sm active:scale-98 transition-all cursor-pointer"
              >
                Get VPNScope
              </button>

              {/* Guarantee */}
              <div className="flex items-center justify-center gap-2 mt-5 text-xs text-slate-600 font-semibold">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M12 7v5l3 3"/>
                </svg>
                <span>30-day money-back guarantee</span>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-100" />

            {/* Bottom Checklist */}
            <div className="p-8 sm:p-9 bg-white flex flex-col space-y-4">
              <p className="text-xs font-extrabold text-[#0F172A] uppercase tracking-wider mb-1">
                Plan includes:
              </p>

              {['VPN', 'Alternative ID', 'Antivirus', 'Alert', 'Search'].map((feat, idx) => (
                <div key={idx} className="flex items-center justify-between text-sm font-semibold text-slate-700 py-0.5">
                  <span>{feat}</span>
                  <Check className="w-4 h-4 text-[#00C4BC] stroke-[2.5]" />
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

import React from 'react';
import { Check, Coins } from 'lucide-react';

export default function HeroVpnBanner({ onGetVpnClick }) {
  return (
    <section id="vpn-banner" className="py-6 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Soft rounded hero card container matching mockup 100% */}
      <div className="relative bg-[#EFEFF4] rounded-[36px] sm:rounded-[44px] p-6 sm:p-10 lg:p-14 shadow-sm overflow-hidden border border-slate-200/60">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Girl Speed Illustration + Hand Holding Phone Mockup + Curved Arrow */}
          <div className="lg:col-span-6 relative flex items-end justify-center min-h-[460px] sm:min-h-[550px] pb-0 pt-4">
            
            {/* Background Illustration (Girl with yellow beanie & speed meter) */}
            <div className="absolute left-[-20px] sm:left-[0px] top-1/2 -translate-y-1/2 w-[280px] sm:w-[360px] opacity-85 pointer-events-none z-0">
              <img
                src="/assets/girl_speed_illustration.png"
                alt="VPN Speed & Protection Illustration"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Foreground Hand Holding Phone Mockup - Shifted slightly to the right, tilted -10 degrees */}
            <div className="relative z-10 w-full max-w-[420px] sm:max-w-[490px] transform -rotate-[10deg] translate-x-6 sm:translate-x-12 translate-y-8 sm:translate-y-14 hover:scale-[1.02] transition-transform duration-300 ease-out origin-bottom">
              <img
                src="/assets/vpnscope_merged_mockup.png"
                alt="VPNScope App Mobile UI Mockup"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Hand-drawn scribble arrow looping from under phone to text */}
            <div className="hidden xl:block absolute right-[-25px] bottom-16 z-20 pointer-events-none">
              <svg className="w-28 h-20 text-slate-800" viewBox="0 0 120 70" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M15 45 C 35 65, 75 60, 105 20" />
                <path d="M90 22 L 105 20 L 100 35" fill="none" />
              </svg>
            </div>

          </div>

          {/* Right Column: Copy, Offer Pricing, Bullet Checkmarks & CTA */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 text-slate-900 z-10 pl-0 lg:pl-4">
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#1E293B] leading-[1.12]">
              Next-Gen VPN Shield for<br className="hidden sm:inline" /> all your devices
            </h1>

            {/* Pricing Row with custom VPNScope offer */}
            <div className="space-y-1">
              <div className="text-xl sm:text-2xl font-medium text-slate-800 flex flex-wrap items-baseline gap-x-2">
                <span className="text-slate-700">Special rate</span>
                <span className="line-through text-slate-400 font-normal text-lg sm:text-xl">$6.99</span>
                <span className="text-slate-800 font-semibold">sale price</span>
                <span className="text-[#0F172A] font-extrabold text-2xl sm:text-3xl tracking-tight">
                  $2.49/mo.
                </span>
              </div>
              <div className="text-lg sm:text-xl font-extrabold text-[#0F172A] tracking-wide pt-0.5">
                + 3 MONTHS EXTRA FREE
              </div>
            </div>

            {/* Checkmark List with unique security features */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-center gap-3 text-slate-800 text-base sm:text-lg font-semibold">
                <Check className="w-5 h-5 text-slate-900 stroke-[3] shrink-0" />
                <span>256-bit AES encryption & verified no-logs policy</span>
              </div>

              <div className="flex items-center gap-3 text-slate-800 text-base sm:text-lg font-semibold">
                <Check className="w-5 h-5 text-slate-900 stroke-[3] shrink-0" />
                <span>Real-time malware, scam & phishing protection</span>
              </div>

              <div className="flex items-center gap-3 text-slate-800 text-base sm:text-lg font-semibold">
                <Check className="w-5 h-5 text-slate-900 stroke-[3] shrink-0" />
                <span>Ultra-fast 10Gbps RAM nodes for 4K streaming & gaming</span>
              </div>
            </div>

            {/* CTA Button & Guarantee Badge — stacked on mobile, side-by-side on desktop */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-start gap-4 sm:gap-6">
              
              <button
                onClick={onGetVpnClick}
                className="w-full sm:w-auto bg-[#FF385C] hover:bg-[#E02D4F] text-white px-8 py-3.5 rounded-[18px] text-base sm:text-lg font-extrabold tracking-wide cursor-pointer shadow-lg shadow-red-500/20 hover:scale-105 active:scale-95 transition-all text-center"
              >
                Get VPNScope
              </button>

              <div className="flex items-center justify-center gap-2 text-slate-800 font-extrabold text-sm sm:text-base whitespace-nowrap">
                <span className="text-lg sm:text-xl leading-none">🪙</span>
                <span>And you free 30 days</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

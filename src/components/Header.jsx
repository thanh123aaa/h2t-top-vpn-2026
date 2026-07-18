import React, { useState } from 'react';
import { Globe, ChevronDown, Check, Menu, X } from 'lucide-react';

export default function Header({ onGetVpnClick }) {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('English');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Exact VPNScope Logo Image */}
        <a href="#" className="flex items-center group focus:outline-none">
          <img
            src="/assets/vpnscope_logo.svg"
            alt="VPNScope Logo - Compare, Review, Protect"
            className="h-10 sm:h-12 w-auto object-contain group-hover:opacity-95 transition-opacity"
          />
        </a>

        {/* Center: Quick Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
          <a href="#top-picks" className="hover:text-blue-600 transition-colors">Top Picks 2026</a>
          <a href="#vpn-banner" className="hover:text-blue-600 transition-colors">Special Bundle</a>
          <a href="#why-smart" className="hover:text-blue-600 transition-colors">Why VPNScope</a>
          <a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-blue-600 transition-colors">FAQs</a>
        </nav>

        {/* Right Actions: Language Selector & Red CTA matching mockup 100% */}
        <div className="hidden sm:flex items-center gap-4">
          
          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-slate-700 hover:bg-slate-100 text-sm font-semibold transition-all cursor-pointer"
              aria-label="Select language"
            >
              <Globe className="w-4 h-4 text-slate-700 stroke-[2.2]" />
              <span className="text-slate-800">Language</span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in duration-150">
                <div className="px-3 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Select Language
                </div>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setCurrentLang(lang.name);
                      setIsLangOpen(false);
                    }}
                    className="w-full text-left px-3.5 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 flex items-center justify-between transition-colors font-medium"
                  >
                    <span className="flex items-center gap-2">
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </span>
                    {currentLang === lang.name && <Check className="w-4 h-4 text-blue-600" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Red CTA Button matching mockup 100% */}
          <button
            onClick={onGetVpnClick}
            className="bg-[#FF385C] hover:bg-[#E02D4F] text-white px-6 py-2.5 rounded-full text-sm font-extrabold tracking-wide cursor-pointer shadow-md shadow-red-500/20 active:scale-95 transition-all"
          >
            Get VPNScope
          </button>
        </div>

        {/* Mobile Hamburger Menu Trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onGetVpnClick}
            className="bg-[#FF385C] text-white px-4 py-1.5 rounded-full text-xs font-bold"
          >
            Get VPNScope
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 rounded-lg border border-slate-200"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-3">
          <a href="#top-picks" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-semibold">Top Picks 2026</a>
          <a href="#vpn-banner" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-semibold">Special Bundle</a>
          <a href="#why-smart" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-semibold">Why VPNScope</a>
          <a href="#why-vpn" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-semibold">Why VPN?</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-semibold">FAQs</a>
        </div>
      )}
    </header>
  );
}

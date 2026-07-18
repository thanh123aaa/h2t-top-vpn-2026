import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const footerColumns = [
  {
    title: 'Products',
    links: [
      'VPNScope VPN',
      'Alternative ID',
      'VPNScope Alert',
      'VPNScope Antivirus',
      'VPNScope Search',
      'Pricing',
    ],
    sub: {
      title: 'Other products',
      links: ['Incogni', 'Ironwall', 'Surfy'],
    },
  },
  {
    title: 'VPNScope VPN',
    links: [
      'What is a VPN?',
      'VPN features',
      'VPN use cases',
      'VPN servers',
      'Dedicated IP',
      'Reviews',
      'VPN download',
      'VPN free trial',
    ],
  },
  {
    title: 'Solution',
    links: ['VPN for teams'],
    sub: {
      title: 'Resources',
      links: [
        'About us',
        'Media center',
        'Trust center',
        'Career',
        'Blog',
        'Transparency report',
        'Contact us',
      ],
    },
  },
  {
    title: 'Programs',
    links: [
      'Affiliate',
      'YouTube creators',
      'Student discount',
      'Graduate discount',
      'Referral program',
    ],
  },
  {
    title: 'Tools',
    links: [
      'DNS',
      'What is my IP?',
      'IP address lookup',
      'DNS leak test',
      'WebRTC leak test',
      'Data leak checker',
    ],
    sub: {
      title: 'Support',
      links: ['Help center', 'Setup guides'],
    },
  },
];

export default function Footer() {
  const [ref, visible] = useScrollAnimation(0.05);
  return (
    <footer
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#111118' }}
      className="w-full text-slate-400"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-14 pb-10">

        {/* ── Main Grid ── */}
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10`}>

          {/* Logo Column */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1 flex flex-col gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <svg width="30" height="34" viewBox="0 0 44 50" fill="none">
                <path d="M22 2L4 10v14c0 12 8 22 18 24C32 46 40 36 40 24V10L22 2Z" fill="#0B2559"/>
                <path d="M22 7L8 14v11c0 9.5 6.2 17.5 14 19.5C29.8 42.5 36 34.5 36 25V14L22 7Z" fill="#1A52C4"/>
                <circle cx="22" cy="23" r="9" fill="none" stroke="white" strokeWidth="1.4"/>
                <path d="M13.2 20h17.6M13.2 26h17.6" stroke="white" strokeWidth="1.2"/>
                <ellipse cx="22" cy="23" rx="4.5" ry="9" fill="none" stroke="white" strokeWidth="1.2"/>
                <circle cx="22" cy="23" r="2.2" fill="white"/>
                <rect x="20.8" y="24.5" width="2.4" height="3" rx="1" fill="white"/>
              </svg>
              <span className="text-white font-black text-lg leading-none">
                VPNScope<sup className="text-[9px]">®</sup>
              </span>
            </div>
          </div>

          {/* Link Columns */}
          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              {/* Primary section */}
              <h4 className="text-white font-bold text-[13px]">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[12px] text-slate-400 hover:text-white transition-colors leading-none"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Sub-section */}
              {col.sub && (
                <div className="mt-4">
                  <h4 className="text-white font-bold text-[13px] mb-3">{col.sub.title}</h4>
                  <ul className="space-y-2">
                    {col.sub.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-[12px] text-slate-400 hover:text-white transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── Divider ── */}
        <div className="mt-12 border-t border-white/8" />

        {/* ── Bottom bar ── */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p className="max-w-2xl leading-relaxed text-center sm:text-left">
            <strong className="text-slate-400">Affiliate Disclosure:</strong> VPNScope is a user-supported
            independent testing site. We may receive affiliate compensation from software providers when
            you click our links to purchase. This does not affect our objective testing methodology or rankings.
          </p>
          <span className="shrink-0 whitespace-nowrap">
            © 2026 VPNScope Testing Labs. All rights reserved.
          </span>
        </div>

        {/* ── Legal links row ── */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-600">
          {['Privacy policy', 'Cookie policy', 'Terms of service', 'Sitemap', 'Report vulnerability'].map(l => (
            <a key={l} href="#" className="hover:text-slate-300 transition-colors">{l}</a>
          ))}
        </div>

      </div>
    </footer>
  );
}

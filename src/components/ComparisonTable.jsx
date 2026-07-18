import React from 'react';
import { Check, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/* ────────────── Brand Logo Components ────────────── */
const ProtonLogo = () => (
  <div className="flex flex-col items-center gap-1.5">
    <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
      <path d="M6 24L16 6L26 24H18V18H14V24H6Z" fill="#6D4AFF"/>
    </svg>
    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="font-bold text-slate-800 text-xs">
      Proton <span className="text-[#6D4AFF]">VPN</span>
    </span>
  </div>
);

const CyberGhostLogo = () => (
  <div className="flex flex-col items-center gap-1.5">
    <div className="w-7 h-7 bg-[#F5C518] rounded-full flex items-center justify-center shadow-sm">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
        <ellipse cx="12" cy="9" rx="5" ry="5.5"/>
        <path d="M7.5 13.5 Q7 20 12 20.5 Q17 20 16.5 13.5" fill="white"/>
        <circle cx="10" cy="8" r="1.3" fill="#F5C518"/>
        <circle cx="14" cy="8" r="1.3" fill="#F5C518"/>
      </svg>
    </div>
    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="font-black text-slate-800 text-xs italic">CyberGhost</span>
  </div>
);

const ExpressVpnLogo = () => (
  <div className="flex flex-col items-center gap-1.5">
    <div className="w-7 h-7 rounded-full bg-[#DA3940] flex items-center justify-center shadow-sm">
      <svg width="13" height="11" viewBox="0 0 13 11" fill="white">
        <rect x="0" y="0" width="13" height="3.2" rx="1.6"/>
        <rect x="0" y="4.2" width="9.5" height="3.2" rx="1.6"/>
        <rect x="0" y="8.4" width="6" height="2.1" rx="1.05"/>
      </svg>
    </div>
    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="font-black text-[#DA3940] text-xs tracking-tight">ExpressVPN</span>
  </div>
);

const MullvadLogo = () => (
  <div className="flex flex-col items-center gap-1.5">
    <div className="w-7 h-7 rounded-full bg-[#F5A623] border-2 border-slate-800 flex items-center justify-center overflow-hidden shadow-sm">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="10" r="4.5" fill="white"/>
        <path d="M3.5 20.5 Q3.5 13.5 12 13.5 Q20.5 13.5 20.5 20.5" stroke="white" strokeWidth="2.5" fill="none"/>
      </svg>
    </div>
    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="font-black text-slate-800 text-[10px] tracking-[0.12em] uppercase">MULLVAD</span>
  </div>
);

/* ────────────── Cell Renderers ────────────── */
const HeroCell = ({ value }) => {
  if (value === true)
    return (
      <div className="flex justify-center">
        <Check strokeWidth={3} className="w-6 h-6 text-[#0F172A]" />
      </div>
    );
  return (
    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="font-black text-[20px] text-[#0F172A] leading-tight block text-center">
      {value}
    </span>
  );
};

const CompetitorCell = ({ value }) => {
  if (value === true)
    return (
      <div className="flex justify-center">
        <Check strokeWidth={2.5} className="w-5 h-5 text-slate-500" />
      </div>
    );
  if (value === false)
    return (
      <div className="flex justify-center">
        <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
          <X strokeWidth={2.5} className="w-3 h-3 text-red-500" />
        </div>
      </div>
    );
  return (
    <span
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      className="text-xs text-slate-500 font-medium block text-center leading-snug"
    >
      {value}
    </span>
  );
};

/* ────────────── Row Label ────────────── */
const RowLabel = ({ label }) => (
  <span
    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    className="text-[13px] font-semibold text-[#5B8B8B] leading-snug"
  >
    {label}
  </span>
);

/* ────────────── Main Component ────────────── */
export default function ComparisonTable({ onSelectVpn }) {
  const rows = [
    {
      id: 'speed',
      label: 'Connection speed*',
      hero: '1615 Mbps',
      proton: '1521 Mbps',
      cyberghost: '950 Mbps',
      expressvpn: '1479 Mbps',
      mullvad: '–',
    },
    {
      id: 'devices',
      label: 'Number of devices',
      hero: 'Unlimited',
      proton: '10',
      cyberghost: '7',
      expressvpn: '12',
      mullvad: '5',
    },
    {
      id: 'adblock',
      label: 'Ad and tracker blocking',
      hero: true,
      proton: true,
      cyberghost: true,
      expressvpn: true,
      mullvad: true,
    },
    {
      id: 'antivirus',
      label: 'Complete antivirus solution',
      hero: true,
      proton: false,
      cyberghost: false,
      expressvpn: false,
      mullvad: false,
    },
    {
      id: 'darkweb',
      label: 'Dark web monitoring',
      hero: true,
      proton: true,
      cyberghost: false,
      expressvpn: 'Limited to the US',
      mullvad: false,
    },
  ];

  const ROW_H = 76;        // px per data row
  const ROW_GAP = 0;        // NO gap — rows are flush, bands align perfectly
  const HERO_LOGO_H = 84;   // px hero logo area above rows
  const BTN_H = 72;         // px button area at bottom of hero card
  const totalRowsH = rows.length * ROW_H; // no gaps

  const [titleRef, titleVisible] = useScrollAnimation(0.3);
  const [tableRef, tableVisible] = useScrollAnimation(0.05);

  return (
    <section
      id="top-picks"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      className="py-14 px-4 sm:px-8 lg:px-12 max-w-[1100px] mx-auto"
    >
      {/* ── Section Header ── */}
      <div ref={titleRef} className={`reveal ${titleVisible ? 'visible' : ''} text-center mb-14`}>
        <h2
          style={{ letterSpacing: '-0.025em', fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)' }}
          className="font-extrabold text-[#1E293B] leading-tight"
        >
          VPN services compared at a glance
        </h2>
        <p style={{ fontSize: 'clamp(0.82rem, 1.3vw, 0.95rem)' }} className="mt-3 text-slate-400 font-medium tracking-wide">
          A side-by-side view of key criteria across popular VPN providers.
        </p>
      </div>

      {/* ── Mobile horizontal scroll hint ── */}
      <p className="block md:hidden text-center text-xs font-semibold text-slate-400 mb-4 flex items-center justify-center gap-1.5">
        <svg className="w-4 h-4 text-slate-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
        <span>Swipe horizontally to compare all VPNs</span>
      </p>

      {/* ── Table wrapper — smooth responsive horizontal scroll ── */}
      <div ref={tableRef} className={`reveal-scale ${tableVisible ? 'visible' : ''} w-full overflow-x-auto pb-4 scrollbar-none`}>
        <div className="min-w-[860px] pt-4">

          {/* ── Grid header: label col + hero col + 4 competitor cols ── */}
        {/*  Using CSS grid with fr so it always fits the viewport  */}
        <div
          className="grid items-end"
          style={{
            gridTemplateColumns: '18% 18% repeat(4, 1fr)',
            paddingBottom: '16px',
          }}
        >
          {/* empty label cell */}
          <div />
          {/* empty hero cell (hero card is absolute/overlapping) */}
          <div />
          {/* logos */}
          <div className="flex justify-center"><ProtonLogo /></div>
          <div className="flex justify-center"><CyberGhostLogo /></div>
          <div className="flex justify-center"><ExpressVpnLogo /></div>
          <div className="flex justify-center"><MullvadLogo /></div>
        </div>

        {/* ── Rows + Hero Card container (extra height for button at bottom) ── */}
        <div className="relative" style={{ minHeight: `${totalRowsH + BTN_H + 16}px` }}>

          {/* Data rows — alternating: even=gray bg, odd=white */}
          <div className="flex flex-col">
            {rows.map((row, i) => (
              <div
                key={row.id}
                className="grid items-center transition-colors"
                style={{
                  gridTemplateColumns: '18% 18% repeat(4, 1fr)',
                  height: `${ROW_H}px`,
                  /* even rows: rounded pill shape with light bg */
                  background: i % 2 === 0 ? '#F1F3F7' : 'transparent',
                  borderRadius: i % 2 === 0 ? '16px' : '0',
                }}
              >
                {/* Row label */}
                <div className="px-5">
                  <RowLabel label={row.label} />
                </div>

                {/* Hero placeholder (overlaid by hero card) */}
                <div />

                {/* Competitors */}
                <div className="flex items-center justify-center">
                  <CompetitorCell value={row.proton} />
                </div>
                <div className="flex items-center justify-center">
                  <CompetitorCell value={row.cyberghost} />
                </div>
                <div className="flex items-center justify-center">
                  <CompetitorCell value={row.expressvpn} />
                </div>
                <div className="flex items-center justify-center">
                  <CompetitorCell value={row.mullvad} />
                </div>
              </div>
            ))}
          </div>

          {/* ── Hero Card — phone-shaped pill overlaying rows ── */}
          <div
            className="absolute flex flex-col overflow-hidden"
            style={{
              top: `-${HERO_LOGO_H}px`,
              left: '18%',
              width: '18%',
              height: `${totalRowsH + HERO_LOGO_H + BTN_H}px`,
              /* Phone-like rounded rectangle — more rounded corners */
              borderRadius: '40px',
              background: '#00C4BC',
              boxShadow: '5px 5px 0px 3px #111827, 0 20px 50px rgba(0,160,140,0.28)',
              border: '2px solid rgba(0,0,0,0.10)',
            }}
          >
            {/* ─ Logo header — using shared VPNScope SVG logo ─ */}
            <div
              className="flex items-center justify-center"
              style={{
                height: `${HERO_LOGO_H}px`,
                flexShrink: 0,
                padding: '0 14px',
              }}
            >
              <img
                src="/assets/vpnscope_logo.svg"
                alt="VPNScope"
                style={{ width: '100%', maxWidth: '160px', height: 'auto', objectFit: 'contain' }}
              />
            </div>

            {/* ─ Feature bands — exact same height as background rows, no gap ─ */}
            <div className="flex flex-col" style={{ flex: 1 }}>
              {rows.map((row, i) => (
                <div
                  key={row.id}
                  className="flex items-center justify-center"
                  style={{
                    height: `${ROW_H}px`,
                    padding: '0 20px',
                    /* Mirror alternating pattern of background rows */
                    background: i % 2 === 0
                      ? 'rgba(0,0,0,0.07)'
                      : 'transparent',
                  }}
                >
                  <HeroCell value={row.hero} />
                </div>
              ))}
            </div>

            {/* ─ CTA button with generous padding so it never touches edges ─ */}
            <div
              className="flex items-center"
              style={{ height: `${BTN_H}px`, padding: '0 20px', flexShrink: 0 }}
            >
              <button
                onClick={() => onSelectVpn && onSelectVpn({ name: 'VPNScope' })}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                className="w-full bg-[#0F172A] hover:bg-[#1e293b] active:scale-[0.97] text-white font-extrabold text-sm py-3.5 rounded-[18px] shadow-lg cursor-pointer transition-all"
              >
                Get VPNScope
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* ── Disclaimer ── */}
      <div className="mt-10 flex flex-col items-center gap-2">
        <div
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          className="bg-slate-100 text-slate-400 text-xs font-semibold px-4 py-1.5 rounded-full border border-slate-200 inline-block"
        >
          Date of comparison: April 10, 2026.
        </div>
        <p className="text-[11px] text-slate-400 font-medium">
          *VPN speeds are based on Techradar research.{' '}
          <a href="#" className="underline underline-offset-2 hover:text-slate-600 transition-colors">
            Find the full report here.
          </a>
        </p>
      </div>
    </section>
  );
}

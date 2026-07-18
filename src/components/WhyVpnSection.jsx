import React from 'react';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';

const ICON_SIZE = 52;

/* ─── Surfshark-style compound icons: dark body + small color accent ─── */
const IconEasySetup = () => (
  <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 52 52" fill="none">
    {/* Finger / hand outline */}
    <path d="M22 30V18a3 3 0 0 1 6 0v12" stroke="#1a1a2e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 22a3 3 0 0 1 6 0v6" stroke="#1a1a2e" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M16 26a3 3 0 0 1 6 0v4" stroke="#1a1a2e" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M16 30v2a10 10 0 0 0 10 10h2a10 10 0 0 0 10-10v-6a3 3 0 0 0-6 0" stroke="#1a1a2e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Teal dot accent */}
    <circle cx="38" cy="16" r="5" fill="#00C4BC"/>
    <path d="M36 16l1.5 1.5 3-3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconMultidevice = () => (
  <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 52 52" fill="none">
    {/* Monitor */}
    <rect x="8" y="12" width="28" height="20" rx="3" stroke="#1a1a2e" strokeWidth="2.2"/>
    <path d="M8 26h28" stroke="#1a1a2e" strokeWidth="2.2"/>
    <path d="M22 32v4M17 36h10" stroke="#1a1a2e" strokeWidth="2.2" strokeLinecap="round"/>
    {/* Phone — small, overlapping right side */}
    <rect x="33" y="24" width="11" height="18" rx="2.5" fill="white" stroke="#1a1a2e" strokeWidth="2.2"/>
    <circle cx="38.5" cy="39.5" r="1" fill="#1a1a2e"/>
    {/* Teal fill inside phone screen */}
    <rect x="35" y="27" width="7" height="10" rx="1" fill="#00C4BC" opacity="0.85"/>
  </svg>
);

const IconSmoothConnections = () => (
  <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 52 52" fill="none">
    {/* Tablet frame */}
    <rect x="10" y="8" width="24" height="34" rx="3" stroke="#1a1a2e" strokeWidth="2.2"/>
    <circle cx="22" cy="37" r="1.2" fill="#1a1a2e"/>
    <path d="M10 12h24" stroke="#1a1a2e" strokeWidth="2"/>
    {/* Circular arrows — smooth connections accent */}
    <circle cx="37" cy="22" r="8" fill="white" stroke="#1a1a2e" strokeWidth="2"/>
    <path d="M33 22a4 4 0 0 1 7.5-1.5" stroke="#00C4BC" strokeWidth="2" strokeLinecap="round"/>
    <path d="M41 22a4 4 0 0 1-7.5 1.5" stroke="#00C4BC" strokeWidth="2" strokeLinecap="round"/>
    <path d="M40.5 18.5l1-2.5 2 1.5" stroke="#00C4BC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M33.5 25.5l-1 2.5-2-1.5" stroke="#00C4BC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconStreamlinedSecurity = () => (
  <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 52 52" fill="none">
    {/* Notepad / clipboard */}
    <rect x="11" y="10" width="24" height="30" rx="3" stroke="#1a1a2e" strokeWidth="2.2"/>
    <path d="M17 10V8a2 2 0 0 1 4 0v2" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round"/>
    <path d="M15 20h14M15 25h10M15 30h8" stroke="#1a1a2e" strokeWidth="1.8" strokeLinecap="round"/>
    {/* Shield badge overlay */}
    <path d="M34 28l-7 3.5C27 38 30 42 34 44c4-2 7-6 7-12.5L34 28Z" fill="white" stroke="#1a1a2e" strokeWidth="2"/>
    <path d="M34 28l-7 3.5c0 5 3 9 7 10.5 4-1.5 7-5.5 7-10.5L34 28Z" fill="#00C4BC" opacity="0.9"/>
    <path d="M31.5 36l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconPrivacyFirst = () => (
  <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 52 52" fill="none">
    {/* Clipboard */}
    <rect x="11" y="10" width="24" height="30" rx="3" stroke="#1a1a2e" strokeWidth="2.2"/>
    <path d="M17 10V8a2 2 0 0 1 4 0v2" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round"/>
    <path d="M15 20h14M15 25h10M15 30h8" stroke="#1a1a2e" strokeWidth="1.8" strokeLinecap="round"/>
    {/* Red X badge */}
    <circle cx="37" cy="35" r="7" fill="white" stroke="#E63946" strokeWidth="2"/>
    <path d="M34 32l6 6M40 32l-6 6" stroke="#E63946" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
);

const IconCybersecurityBundle = () => (
  <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 52 52" fill="none">
    {/* Device / tablet frame */}
    <rect x="8" y="10" width="26" height="30" rx="3" stroke="#1a1a2e" strokeWidth="2.2"/>
    <path d="M8 34h26" stroke="#1a1a2e" strokeWidth="2"/>
    <circle cx="21" cy="37" r="1.2" fill="#1a1a2e"/>
    {/* Shield overlay */}
    <path d="M37 20l-8 4c0 6 3.5 11 8 13 4.5-2 8-7 8-13L37 20Z" fill="white" stroke="#1a1a2e" strokeWidth="2"/>
    <path d="M37 20l-8 4c0 6 3.5 11 8 13 4.5-2 8-7 8-13L37 20Z" fill="#00C4BC" opacity="0.15"/>
    <circle cx="37" cy="30" r="3.5" stroke="#1a1a2e" strokeWidth="2"/>
    <path d="M37 26v-2M37 34v2M33 30h-2M41 30h2" stroke="#1a1a2e" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const features = [
  {
    icon: <IconEasySetup />,
    title: 'Easy setup',
    desc: (
      <>
        Protect yourself in seconds with a simple, intuitive app. Just install, log in, and connect — no technical steps required.
      </>
    ),
  },
  {
    icon: <IconMultidevice />,
    title: 'Multidevice protection',
    desc: (
      <>
        Use VPNScope on{' '}
        <a href="#vpn-banner" className="underline decoration-slate-400 underline-offset-2 hover:text-[#00C4BC] transition-colors">
          all your devices at the same time
        </a>
        . Get our VPN app on your phone, laptop, tablet, and more with one subscription.
      </>
    ),
  },
  {
    icon: <IconSmoothConnections />,
    title: 'Smooth connections',
    desc: (
      <>
        Browse, stream, and work with a stable connection. As the{' '}
        <a href="#top-picks" className="underline decoration-slate-400 underline-offset-2 hover:text-[#00C4BC] transition-colors">
          fastest VPN
        </a>{' '}
        out there, VPNScope reliably handles everyday internet use.
      </>
    ),
  },
  {
    icon: <IconStreamlinedSecurity />,
    title: 'Streamlined security',
    desc: (
      <>
        VPNScope has lightweight VPN protocols —{' '}
        <a href="#faq" className="underline decoration-slate-400 underline-offset-2 hover:text-[#00C4BC] transition-colors">WireGuard</a>,{' '}
        <a href="#faq" className="underline decoration-slate-400 underline-offset-2 hover:text-[#00C4BC] transition-colors">IKEv2</a>, and{' '}
        <a href="#faq" className="underline decoration-slate-400 underline-offset-2 hover:text-[#00C4BC] transition-colors">OpenVPN</a> — to help protect your connection without manual configuration.
      </>
    ),
  },
  {
    icon: <IconPrivacyFirst />,
    title: 'Privacy-first design',
    desc: (
      <>
        Built to minimize tracking, VPNScope never stores your browsing data.{' '}
        <a href="#faq" className="underline decoration-slate-400 underline-offset-2 hover:text-[#00C4BC] transition-colors">
          Independent audits
        </a>{' '}
        verify that we can't see what you do online.
      </>
    ),
  },
  {
    icon: <IconCybersecurityBundle />,
    title: 'Cybersecurity bundle',
    desc: (
      <>
        Going beyond VPN protection, VPNScope's all-in-one suite includes the Clean Web ad blocker, email masking with{' '}
        <a href="#vpn-banner" className="underline decoration-slate-400 underline-offset-2 hover:text-[#00C4BC] transition-colors">
          Alternative ID
        </a>
        , and more.
      </>
    ),
  },
];

const whyPoints = [
  {
    title: 'Increased privacy when you browse, stream, & game',
    desc: 'Connecting to a VPN keeps your data less exposed during everyday online activities like surfing, streaming, and gaming.',
  },
  {
    title: 'Added security on public Wi-Fi',
    desc: 'When connecting to public Wi-Fi in a café, airport, or hotel, you can use a VPN to add an extra layer of protection on open networks.',
  },
  {
    title: 'Dependable access when traveling',
    desc: 'When visiting a new country or location, a VPN helps you enjoy a consistent online experience across different networks and environments.',
  },
];

export default function WhyVpnSection() {
  const [titleRef, titleVisible] = useScrollAnimation(0.3);
  const [gridRef, gridVisible] = useStaggerAnimation(0.05);
  const [whyTitleRef, whyTitleVisible] = useScrollAnimation(0.2);
  const [whyTextRef, whyTextVisible] = useScrollAnimation(0.1);
  const [whyImgRef, whyImgVisible] = useScrollAnimation(0.1);

  return (
    <>
      {/* ─── Section 1: Feature Grid ─── */}
      <section
        id="why-smart"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        className="py-20 px-4 sm:px-8 lg:px-12 max-w-[1140px] mx-auto"
      >
        {/* Title */}
        <div ref={titleRef} className={`reveal ${titleVisible ? 'visible' : ''} text-center mb-14`}>
          <h2
            style={{ letterSpacing: '-0.025em', fontSize: 'clamp(1.8rem, 3.8vw, 2.6rem)' }}
            className="font-extrabold text-[#1E293B] leading-tight"
          >
            What makes VPNScope a smart VPN choice?
          </h2>
        </div>

        {/* Feature Cards — matching Surfshark grey card style */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const stagger = `stagger-${Math.min(i + 1, 6)}`;
            return (
              <div
                key={i}
                className={`reveal ${stagger} ${gridVisible ? 'visible' : ''} feature-card bg-[#F5F6F8] rounded-[24px] p-7 sm:p-8 border border-slate-100/60 cursor-default flex flex-col justify-start`}
              >
                <div className="mb-6">{f.icon}</div>
                <h3
                  style={{ fontSize: 'clamp(1.05rem, 1.6vw, 1.2rem)' }}
                  className="font-extrabold text-[#0F172A] mb-3 leading-snug"
                >
                  {f.title}
                </h3>
                <p style={{ fontSize: 'clamp(0.82rem, 1.25vw, 0.92rem)' }} className="text-slate-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── Section 2: Why VPN Makes Sense ─── */}
      <section
        id="why-vpn"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        className="py-20 px-4 sm:px-8 lg:px-12 max-w-[1100px] mx-auto"
      >
        <div className="flex flex-col lg:flex-row items-center gap-14">

          {/* Left text */}
          <div ref={whyTextRef} className={`reveal-left ${whyTextVisible ? 'visible' : ''} flex-1 max-w-[520px]`}>
            <div ref={whyTitleRef}>
              <h2
                style={{ letterSpacing: '-0.025em', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
                className={`reveal ${whyTitleVisible ? 'visible' : ''} font-extrabold text-[#0F172A] leading-tight mb-8`}
              >
                Why using a VPN makes sense
              </h2>
            </div>

            <div className="space-y-7">
              {whyPoints.map((p, i) => (
                <div key={i} className={`reveal stagger-${i + 1} ${whyTextVisible ? 'visible' : ''}`}>
                  <h3
                    style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1rem)' }}
                    className="font-extrabold text-[#0F172A] mb-1.5"
                  >
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 'clamp(0.82rem, 1.2vw, 0.9rem)' }} className="text-slate-500 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: real photo */}
          <div
            ref={whyImgRef}
            className={`reveal-right ${whyImgVisible ? 'visible' : ''} flex-1 w-full max-w-[480px]`}
          >
            <img
              src="/assets/vpn_travel_airport.png"
              alt="Woman at airport using VPN on phone — protected from hackers, malware, and tracking"
              className="w-full h-auto rounded-3xl object-cover shadow-2xl"
              style={{ aspectRatio: '1/1' }}
            />
          </div>

        </div>
      </section>
    </>
  );
}

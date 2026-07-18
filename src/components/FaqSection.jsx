import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';

const faqs = [
  {
    q: 'What is a VPN?',
    a: `A VPN (Virtual Private Network) is a service that creates a secure, encrypted connection between your device and the internet. It hides your real IP (Internet Protocol) address by routing your traffic through a private server, so anyone tracking your online activity sees the server's location, not yours.\n\nVPN usage boosts your online privacy and security, protecting your data from hackers and prying eyes across multiple devices. Check out our What is a VPN? guide for more information.`,
  },
  {
    q: 'What devices can I use a VPN service on?',
    a: 'VPNScope works on Windows, macOS, iOS, Android, Linux, Chrome browser extension, Smart TVs, and routers — giving you complete protection across all your devices with a single subscription.',
  },
  {
    q: 'What is the best VPN service?',
    a: 'Based on our independent lab testing in 2026, VPNScope ranks #1 for speed, privacy, and value — offering 1615 Mbps throughput, unlimited devices, antivirus bundling, and dark web monitoring starting at just $2.49/month.',
  },
  {
    q: 'How does a VPN work?',
    a: 'A VPN encrypts your internet traffic and routes it through a secure server in a location of your choice. This masks your real IP address, protects your data from eavesdropping on public networks, and can bypass geo-restrictions on streaming content.',
  },
  {
    q: 'Can I use a VPN for free?',
    a: 'VPNScope offers a 30-day risk-free money-back guarantee — effectively a free trial. Free VPNs typically come with severe limitations: data caps, slow speeds, privacy concerns, and limited server access. A paid plan ensures full protection.',
  },
  {
    q: 'Will VPNScope slow down my internet connection?',
    a: 'No. Our 10Gbps RAM-disk server infrastructure limits speed drop to under 3%, which is virtually imperceptible. For users experiencing ISP throttling during gaming or streaming, VPNScope can actually increase effective speeds.',
  },
  {
    q: 'Is VPNScope easy to set up and use?',
    a: "Absolutely. Install the app, log in, and tap Connect — that's it. No technical knowledge required. VPNScope auto-selects the optimal protocol and server for your location and use case.",
  },
  {
    q: 'Does VPNScope keep logs of my online activity?',
    a: 'No. VPNScope operates under a strict zero-logs policy, independently audited by Deloitte. We do not store your browsing history, IP addresses, session timestamps, bandwidth usage, or DNS queries.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [titleRef, titleVisible] = useScrollAnimation(0.3);
  const [listRef, listVisible] = useStaggerAnimation(0.05);

  return (
    <section
      id="faq"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#111118' }}
      className="w-full py-20 px-4"
    >
      {/* Title */}
      <div ref={titleRef} className={`reveal ${titleVisible ? 'visible' : ''}`}>
        <h2
          style={{ letterSpacing: '0.08em', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}
          className="text-white font-black text-center mb-12 uppercase tracking-widest"
        >
          FAQ
        </h2>
      </div>

      {/* Accordion */}
      <div ref={listRef} className="max-w-2xl mx-auto">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          const stagger = `stagger-${Math.min(idx + 1, 8)}`;
          return (
            <div
              key={idx}
              className={`reveal ${stagger} ${listVisible ? 'visible' : ''} border-b border-white/10`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between py-5 text-left gap-4 cursor-pointer group"
              >
                <span
                  style={{ fontSize: 'clamp(0.88rem, 1.5vw, 1rem)' }}
                  className={`font-semibold leading-snug transition-colors duration-200 ${
                    isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'
                  }`}
                >
                  {faq.q}
                </span>
                <div className="shrink-0 text-slate-400 group-hover:text-slate-200 transition-colors">
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 stroke-[2.5]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  )}
                </div>
              </button>

              <div
                style={{
                  maxHeight: isOpen ? '400px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              >
                <div className="pb-6 space-y-3">
                  {faq.a.split('\n\n').map((para, i) => (
                    <p
                      key={i}
                      style={{ fontSize: 'clamp(0.82rem, 1.3vw, 0.92rem)' }}
                      className="text-slate-400 leading-relaxed"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

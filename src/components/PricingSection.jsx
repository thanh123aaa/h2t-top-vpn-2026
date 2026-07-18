import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

const allFeaturesList = ['VPN', 'Alternative ID', 'Antivirus', 'Alert', 'Search', 'Incogni Data Removal'];

const plans = [
  {
    id: 'starter',
    badge: null,
    name: 'VPNScope Starter',
    price: '$1.99',
    period: '/mo.',
    extra: '+2 EXTRA months',
    note: '$51.74 for the first 26 months (VAT may apply).',
    cta: 'Get Starter',
    featured: false,
    includes: ['VPN', 'Alternative ID'],
  },
  {
    id: 'one',
    badge: 'Most popular',
    name: 'VPNScope One',
    price: '$2.79',
    period: '/mo.',
    extra: '+3 EXTRA months',
    note: '$75.33 for the first 27 months (VAT may apply).',
    cta: 'Get VPNScope One',
    featured: true,
    includes: ['VPN', 'Alternative ID', 'Antivirus', 'Alert', 'Search'],
  },
  {
    id: 'ultimate',
    badge: 'Best value',
    name: 'VPNScope Ultimate',
    price: '$3.99',
    period: '/mo.',
    extra: '+4 EXTRA months',
    note: '$111.72 for the first 28 months (VAT may apply).',
    cta: 'Get Ultimate',
    featured: false,
    includes: ['VPN', 'Alternative ID', 'Antivirus', 'Alert', 'Search', 'Incogni Data Removal'],
  },
];

export default function PricingSection({ onSelectPlan }) {
  const [titleRef, titleVisible] = useScrollAnimation(0.3);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.1);
  const [expandedPlan, setExpandedPlan] = useState(null);

  return (
    <section
      id="pricing"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#FAFAFC' }}
      className="w-full py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* ── Title ── */}
      <div ref={titleRef} className={`reveal ${titleVisible ? 'visible' : ''} text-center mb-12`}>
        <h2
          style={{
            fontSize: 'clamp(1.8rem, 3.8vw, 2.6rem)',
            letterSpacing: '-0.025em',
            fontWeight: 800,
            color: '#1E293B',
          }}
        >
          Choose your best plan
        </h2>
        <p style={{ fontSize: 'clamp(0.85rem, 1.3vw, 0.98rem)' }} className="mt-2 text-slate-500 font-medium">
          Save up to 65% with our multi-month plans — backed by a 30-day money-back guarantee.
        </p>
      </div>

      {/* ── Cards Grid (Equal Heights) ── */}
      <div
        ref={cardsRef}
        className="max-w-[1040px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
      >
        {plans.map((plan, i) => {
          const stagger = `stagger-${i + 1}`;
          const isExpanded = expandedPlan === plan.id;

          return (
            <div
              key={plan.id}
              className={`reveal ${stagger} ${cardsVisible ? 'visible' : ''} relative flex flex-col h-full bg-white rounded-3xl transition-all duration-300 overflow-hidden ${
                plan.featured
                  ? 'border-2 border-[#00C4BC] shadow-xl shadow-teal-500/10'
                  : 'border border-slate-200 hover:border-slate-300 hover:shadow-lg'
              }`}
            >
              {/* Header Banner — matching height for all 3 cards so content aligns 100% */}
              {plan.badge ? (
                <div
                  className={`w-full py-2 text-center text-xs font-bold tracking-wide uppercase shrink-0 ${
                    plan.featured ? 'bg-[#00C4BC] text-white' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {plan.badge}
                </div>
              ) : (
                <div className="w-full py-2 text-center text-xs font-bold tracking-wide uppercase opacity-0 pointer-events-none select-none shrink-0 border-b border-transparent">
                  Placeholder
                </div>
              )}

              {/* ── Top Body: Title, Price, CTA (Flex Grow to push divider to exact same bottom) ── */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  {/* Plan Name */}
                  <h3 className="text-xl font-extrabold text-[#0F172A] mb-3">
                    {plan.name}
                  </h3>

                  {/* Big Price */}
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-black text-[#0F172A] tracking-tight leading-none">
                      {plan.price}
                    </span>
                    <span className="text-slate-500 text-sm font-semibold">{plan.period}</span>
                  </div>

                  {/* Extra Months Highlight */}
                  {plan.extra && (
                    <p className="text-[#FF385C] font-extrabold text-sm mb-1.5">
                      {plan.extra}
                    </p>
                  )}

                  {/* Sub-note */}
                  <p className="text-slate-400 text-[11.5px] leading-snug mb-6 min-h-[32px]">
                    {plan.note}
                  </p>
                </div>

                <div>
                  {/* CTA Button — matching exact teal button with dark border */}
                  <button
                    onClick={() => onSelectPlan && onSelectPlan({ name: plan.name, price: plan.price })}
                    className={`w-full py-3.5 px-4 rounded-2xl font-extrabold text-sm transition-all duration-200 cursor-pointer shadow-sm ${
                      plan.featured
                        ? 'bg-[#00C4BC] hover:bg-[#00b0a8] text-[#0F172A] border-2 border-[#0F172A] active:scale-98'
                        : 'bg-white hover:bg-slate-50 text-[#0F172A] border-2 border-[#0F172A] active:scale-98'
                    }`}
                  >
                    {plan.cta}
                  </button>

                  {/* 30-day money-back guarantee */}
                  <div className="flex items-center justify-center gap-1.5 mt-4 text-[12px] text-slate-600 font-semibold">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <circle cx="12" cy="12" r="9"/>
                      <path d="M12 7v5l3 3"/>
                    </svg>
                    <span>30-day money-back guarantee</span>
                  </div>
                </div>
              </div>

              {/* ── Horizontal Divider ── */}
              <div className="border-t border-slate-100" />

              {/* ── Bottom Section: Plan Includes Checklist (Fixed layout for 100% equal card height) ── */}
              <div className="p-6 sm:p-7 bg-white flex flex-col shrink-0 min-h-[260px] justify-between">
                <div>
                  <p className="text-xs font-extrabold text-[#0F172A] uppercase tracking-wider mb-3">
                    Plan includes:
                  </p>

                  <div className="space-y-2.5">
                    {(isExpanded ? allFeaturesList : allFeaturesList.slice(0, 5)).map((feat, idx) => {
                      const isIncluded = plan.includes.includes(feat);
                      return (
                        <div key={idx} className="flex items-center justify-between text-xs font-semibold py-0.5">
                          <span className={isIncluded ? 'text-slate-700' : 'text-slate-300'}>{feat}</span>
                          {isIncluded ? (
                            <Check className="w-4 h-4 text-[#00C4BC] stroke-[2.5]" />
                          ) : (
                            <span className="text-slate-200 text-xs font-bold">-</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Toggle View all features */}
                <button
                  onClick={() => setExpandedPlan(isExpanded ? null : plan.id)}
                  className="flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-[#00C4BC] pt-3 transition-colors cursor-pointer mt-2"
                >
                  <span>{isExpanded ? 'Hide features' : 'View all features'}</span>
                  {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}

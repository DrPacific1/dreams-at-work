"use client"

import { useState } from "react"

const PLANS = [
  {
    name: "Starter",
    tagline: "For small teams getting started",
    monthly: 12,
    annual: 9,
    cta: "Start free trial",
    ctaHref: "/onboarding",
    highlight: false,
    features: [
      "Up to 10 team members",
      "Timeline & capacity views",
      "Google Calendar sync",
      "7-day project history",
      "Email support",
    ],
  },
  {
    name: "Pro",
    tagline: "For growing teams that need more",
    monthly: 24,
    annual: 19,
    cta: "Start free trial",
    ctaHref: "/onboarding",
    highlight: true,
    badge: "Most popular",
    features: [
      "Unlimited team members",
      "Everything in Starter",
      "Slack + Jira + Notion integrations",
      "Workload insights & heatmaps",
      "Custom roles & permissions",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For large orgs with complex needs",
    monthly: null,
    annual: null,
    cta: "Talk to Sales",
    ctaHref: "#",
    highlight: false,
    features: [
      "Everything in Pro",
      "SSO / SAML authentication",
      "Dedicated Customer Success",
      "SLA & 99.99% uptime guarantee",
      "Custom contract & invoicing",
    ],
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-400">
            Pricing
          </p>
          <h2 className="text-4xl font-black tracking-tight text-[#0D0D0D]">
            Simple, transparent pricing
          </h2>
          <p className="mt-3 text-lg text-gray-500">
            Start free. Scale as you grow.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-gray-50 p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                !annual ? "bg-white text-[#0D0D0D] shadow-sm" : "text-gray-500"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                annual ? "bg-white text-[#0D0D0D] shadow-sm" : "text-gray-500"
              }`}
            >
              Annual
              <span className="rounded-full bg-fluro px-2 py-0.5 text-[10px] font-bold text-[#0D0D0D]">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.highlight
                  ? "border-fluro shadow-lg shadow-[#CCFF00]/20"
                  : "border-gray-200"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-fluro px-4 py-1 text-xs font-bold text-[#0D0D0D]">
                  {plan.badge}
                </span>
              )}

              <div>
                <p className="text-lg font-black text-[#0D0D0D]">{plan.name}</p>
                <p className="mt-1 text-sm text-gray-500">{plan.tagline}</p>

                <div className="mt-6">
                  {plan.monthly ? (
                    <div className="flex items-end gap-1">
                      <span className="text-5xl font-black text-[#0D0D0D]">
                        ${annual ? plan.annual : plan.monthly}
                      </span>
                      <span className="mb-2 text-sm text-gray-400">/user/mo</span>
                    </div>
                  ) : (
                    <span className="text-4xl font-black text-[#0D0D0D]">Custom</span>
                  )}
                  {plan.monthly && (
                    <p className="mt-1 text-xs text-gray-400">
                      {annual ? "billed annually" : "billed monthly"}
                    </p>
                  )}
                </div>
              </div>

              <a
                href={plan.ctaHref}
                className={`mt-8 block rounded-full py-3 text-center text-sm font-bold transition-colors ${
                  plan.highlight
                    ? "bg-fluro text-[#0D0D0D] hover:opacity-90"
                    : "bg-[#0D0D0D] text-white hover:bg-gray-800"
                }`}
              >
                {plan.cta}
              </a>

              <ul className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-0.5 text-fluro font-black">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client";

import React from "react";
import {
  Smartphone,
  Zap,
  CreditCard,
  QrCode,
  ShieldCheck,
  BarChart2,
  Navigation
} from "lucide-react";

export default function AppShowcase() {
  const driverFeatures = [
    {
      icon: <Navigation className="w-5 h-5 text-black" />,
      title: "Real-Time Bay Availability",
      desc: "Check occupied and free guns before driving. Reserve a charging slot 15 minutes ahead."
    },
    {
      icon: <QrCode className="w-5 h-5 text-black" />,
      title: "Instant Scan & Charge",
      desc: "Scan the QR code on the Evion totem or tap your Evion RFID card to start instantly."
    },
    {
      icon: <CreditCard className="w-5 h-5 text-black" />,
      title: "Direct UPI & Fast Invoicing",
      desc: "Pay seamlessly with GPay, PhonePe, Paytm, or corporate fleet accounts with instant GST invoices."
    }
  ];

  const partnerFeatures = [
    {
      icon: <BarChart2 className="w-5 h-5 text-black" />,
      title: "Live Franchise Revenue Analytics",
      desc: "Monitor live energy dispensed (kWh), gross earnings, and customer traffic from anywhere."
    },
    {
      icon: <Zap className="w-5 h-5 text-black" />,
      title: "Dynamic Tariff & Peak Controls",
      desc: "Easily adjust peak and off-peak tariffs or run local promotions to boost off-hour footfall."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-black" />,
      title: "Automated Weekly Bank Settlements",
      desc: "Direct automated NEFT transfers of your profit share directly to your registered bank account."
    }
  ];

  return (
    <section id="app" className="py-20 md:py-28 bg-[#f7f7f8] text-neutral-900 border-b border-neutral-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-neutral-800 text-xs font-bold uppercase tracking-wider mb-4 border border-neutral-200">
            <Smartphone className="w-3.5 h-3.5 text-neutral-800" />
            <span>Evion Cloud & Mobile Platform</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black mb-4">
            Connected Cloud & Mobile Telemetry
          </h2>
          <p className="text-base sm:text-lg text-neutral-600">
            A frictionless charging journey for EV drivers and a live revenue analytics dashboard for franchise partners.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Driver Card */}
          <div className="bg-white border border-neutral-200 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-black px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200">
                  For EV Drivers
                </span>
                <span className="text-xs text-neutral-500 font-medium">iOS & Android</span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-black mb-2">
                  Evion Driver Companion
                </h3>
                <p className="text-sm text-neutral-600">
                  Plan effortless Kerala road trips with real-time station status, slot reservations, and automated charging sessions.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {driverFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-3.5">
                    <div className="p-2.5 rounded-2xl bg-[#f7f7f8] border border-neutral-200 shrink-0">
                      {feat.icon}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-black">{feat.title}</div>
                      <div className="text-xs text-neutral-600 mt-0.5 leading-relaxed">{feat.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-neutral-100 flex flex-wrap items-center gap-3">
              <button className="px-5 py-2.5 rounded-full bg-black text-white text-xs font-bold hover:bg-neutral-800 transition-colors">
                Download on App Store
              </button>
              <button className="px-5 py-2.5 rounded-full border border-neutral-300 hover:border-black text-black text-xs font-bold bg-white transition-colors">
                Get on Google Play
              </button>
            </div>
          </div>

          {/* Franchise Owner Card */}
          <div className="bg-white border border-neutral-200 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-black px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200">
                  For Station Hosts
                </span>
                <span className="text-xs text-neutral-500 font-medium">Partner Portal</span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-black mb-2">
                  Cloud CMS & Financial Cockpit
                </h3>
                <p className="text-sm text-neutral-600">
                  Track energy throughput, daily driver sessions, gross turnover, and KSEB billing from anywhere.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {partnerFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-3.5">
                    <div className="p-2.5 rounded-2xl bg-[#f7f7f8] border border-neutral-200 shrink-0">
                      {feat.icon}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-black">{feat.title}</div>
                      <div className="text-xs text-neutral-600 mt-0.5 leading-relaxed">{feat.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00d26a]" />
                OCPP 1.6J / 2.0.1 Certified
              </span>
              <span>24/7 Automated Health Checks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

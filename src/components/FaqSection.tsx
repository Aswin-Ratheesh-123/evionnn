"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: "How to become an Evion charging franchise partner or host in Kerala?",
    a: "If you own or manage commercial land, highway frontage along NH-66/NH-544, a retail mall, restaurant, or eco-resort in Kerala, you can apply online or request a callback. Our technical team conducts a free site survey, evaluates grid feasibility, and prepares a customized financial projection."
  },
  {
    q: "What is the KSEB power requirement and how are electricity tariffs handled?",
    a: "For DC Fast Chargers (60kW to 240kW), a dedicated KSEB LT-EV or HT commercial power connection is required. Evion handles the entire end-to-end liaison with the Kerala State Electricity Board, transformer sanctioning, and electrical inspectorate approvals. Electricity costs are calculated at official KSEB commercial EV tariffs."
  },
  {
    q: "What are the different charging options available for electric four-wheelers?",
    a: "Evion deploys CCS2 DC Fast Chargers (HyperBolt 240kW, CityCharge 120kW & 60kW) that top up compatible electric cars like Tata Nexon EV, Punch EV, MG ZS EV, Mahindra XUV400, Hyundai Ioniq 5, and BYD in 15 to 45 minutes, alongside 22kW Type-2 AC chargers for overnight destination stays."
  },
  {
    q: "How long does it take to set up and commission a station in Kerala?",
    a: "From site approval and agreement signing, our turnkey civil, structural canopy, cabling, and hardware installation takes approximately 21 to 30 days. As soon as KSEB energizes the transformer line, the station goes live on the Evion app and Google Maps."
  },
  {
    q: "How are revenue payouts settled with franchise hosts?",
    a: "All driver charging payments made via the Evion Mobile App, UPI, QR code, or RFID cards are tracked in real-time on your Evion Partner Cloud CMS. Net revenue after KSEB power costs is automatically disbursed every Monday directly to your registered bank account."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-neutral-200">
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Title (Ather Style) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-black">
              Frequently asked questions
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mt-2 leading-relaxed">
              Everything you need to know about charging and franchise partnerships in Kerala.
            </p>
          </div>

          {/* Right Accordion List */}
          <div className="lg:col-span-8 divide-y divide-neutral-200 border-t border-b border-neutral-200">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-5 sm:py-6">
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full text-left flex items-start justify-between gap-4 group focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-semibold text-neutral-900 group-hover:text-black transition-colors">
                      {faq.q}
                    </span>
                    <span className="p-1 rounded-full text-neutral-400 group-hover:text-black transition-colors shrink-0 mt-0.5">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed pr-8 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


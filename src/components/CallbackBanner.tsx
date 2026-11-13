"use client";

import React, { useState } from "react";
import { CheckCircle2, Phone } from "lucide-react";

export default function CallbackBanner() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length >= 10) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-[#121212] pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1360px] mx-auto bg-[#1c1c1e] rounded-3xl sm:rounded-[36px] p-8 sm:p-14 lg:p-16 border border-neutral-800 text-white">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-14">
          {/* Left Text */}
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Wish to know more about Evion ?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-neutral-400 font-light leading-relaxed">
              The best things about an Evion can't be put in words, or captured in images. We'll take up all your questions, just drop us your number. We'll call you.
            </p>
          </div>

          {/* Right: Phone Input Form (Exact Ather Style) */}
          <div className="shrink-0 w-full lg:w-auto">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-neutral-400">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                    className="w-full sm:w-64 pl-12 pr-4 py-3 bg-[#2c2c2e] border border-neutral-700 rounded-full text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-white text-black hover:bg-neutral-200 font-bold text-xs sm:text-sm whitespace-nowrap transition-transform hover:scale-105 active:scale-95"
                >
                  Get a callback
                </button>
              </form>
            ) : (
              <div className="flex items-center space-x-2 text-emerald-400 font-semibold text-sm bg-[#242426] px-5 py-3 rounded-full border border-emerald-500/30">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Thank you! Our Kerala specialist will call you shortly.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


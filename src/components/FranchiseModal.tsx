"use client";

import React, { useState } from "react";
import {
  X,
  CheckCircle2,
  Building2,
  MapPin,
  Zap,
  Phone,
  Mail,
  User,
  ArrowRight
} from "lucide-react";

interface FranchiseModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCity: string;
}

const KERALA_DISTRICTS = [
  "Ernakulam (Kochi)",
  "Thiruvananthapuram",
  "Kozhikode",
  "Thrissur",
  "Malappuram",
  "Palakkad",
  "Kollam",
  "Alappuzha",
  "Kottayam",
  "Kannur",
  "Idukki (Munnar)",
  "Wayanad",
  "Pathanamthitta",
  "Kasaragod"
];

export default function FranchiseModal({ isOpen, onClose, selectedCity }: FranchiseModalProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    district: "Ernakulam (Kochi)",
    cityOrTown: selectedCity,
    propertyType: "Highway Frontage (NH-66 / NH-544)",
    areaSqFt: "1000",
    hasTransformer: "Need Evion KSEB Assistance",
    preferredModel: "Highway Fast-Charge Superhub (120kW/240kW)"
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white border border-neutral-200 rounded-3xl shadow-2xl overflow-hidden text-neutral-900">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-200 bg-[#f7f7f8]">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-black tracking-widest text-black">
              EVION
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-200 text-neutral-700 font-bold uppercase">
              Host Application
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-neutral-200 text-neutral-500 hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Stepper Indicator */}
              <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                <div className="flex items-center space-x-2">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      step >= 1 ? "bg-black text-white" : "bg-neutral-200 text-neutral-600"
                    }`}
                  >
                    1
                  </span>
                  <span className="text-xs font-bold text-black">Partner Details</span>
                </div>
                <div className="h-0.5 w-12 bg-neutral-200" />
                <div className="flex items-center space-x-2">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      step >= 2 ? "bg-black text-white" : "bg-neutral-200 text-neutral-600"
                    }`}
                  >
                    2
                  </span>
                  <span className="text-xs font-bold text-neutral-500">Property & Power</span>
                </div>
              </div>

              {step === 1 && (
                <div className="space-y-4 animate-in fade-in">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Varma"
                        className="w-full pl-10 pr-4 py-2.5 bg-[#f7f7f8] border border-neutral-300 rounded-xl text-sm text-black placeholder-neutral-400 focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1.5 uppercase tracking-wider">
                        WhatsApp / Mobile Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full pl-10 pr-4 py-2.5 bg-[#f7f7f8] border border-neutral-300 rounded-xl text-sm text-black placeholder-neutral-400 focus:outline-none focus:border-black"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1.5 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="rahul@example.com"
                          className="w-full pl-10 pr-4 py-2.5 bg-[#f7f7f8] border border-neutral-300 rounded-xl text-sm text-black placeholder-neutral-400 focus:outline-none focus:border-black"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1.5 uppercase tracking-wider">
                        Kerala District *
                      </label>
                      <select
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#f7f7f8] border border-neutral-300 rounded-xl text-sm text-black focus:outline-none focus:border-black"
                      >
                        {KERALA_DISTRICTS.map((dist) => (
                          <option key={dist} value={dist}>
                            {dist}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1.5 uppercase tracking-wider">
                        City / Town Landmark *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.cityOrTown}
                        onChange={(e) => setFormData({ ...formData, cityOrTown: e.target.value })}
                        placeholder="e.g. Edappally Bypass or Aluva"
                        className="w-full px-4 py-2.5 bg-[#f7f7f8] border border-neutral-300 rounded-xl text-sm text-black placeholder-neutral-400 focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        if (formData.name && formData.phone) setStep(2);
                        else alert("Please fill in your name and phone number");
                      }}
                      className="px-6 py-3 rounded-full bg-black text-white font-bold text-xs hover:bg-neutral-800 flex items-center space-x-2 transition-transform active:scale-95"
                    >
                      <span>Proceed to Property Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-in fade-in">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5 uppercase tracking-wider">
                      Property / Land Type *
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#f7f7f8] border border-neutral-300 rounded-xl text-sm text-black focus:outline-none focus:border-black"
                    >
                      <option>Highway Frontage (NH-66 / NH-544 / MC Road)</option>
                      <option>Commercial Shopping Mall / Complex</option>
                      <option>Hotel, Resort or Tourist Retreat</option>
                      <option>Fuel Station (Petrol Pump)</option>
                      <option>Vacant Commercial Land</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1.5 uppercase tracking-wider">
                        Available Area (sq.ft)
                      </label>
                      <input
                        type="text"
                        value={formData.areaSqFt}
                        onChange={(e) => setFormData({ ...formData, areaSqFt: e.target.value })}
                        placeholder="e.g. 800 - 1500 sq.ft (3-6 cars)"
                        className="w-full px-4 py-2.5 bg-[#f7f7f8] border border-neutral-300 rounded-xl text-sm text-black placeholder-neutral-400 focus:outline-none focus:border-black"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1.5 uppercase tracking-wider">
                        KSEB Power Status
                      </label>
                      <select
                        value={formData.hasTransformer}
                        onChange={(e) => setFormData({ ...formData, hasTransformer: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#f7f7f8] border border-neutral-300 rounded-xl text-sm text-black focus:outline-none focus:border-black"
                      >
                        <option>Need Evion KSEB Assistance (Turnkey)</option>
                        <option>Existing HT Transformer on Site</option>
                        <option>High Load LT Commercial Connection Available</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5 uppercase tracking-wider">
                      Preferred Franchise Model
                    </label>
                    <select
                      value={formData.preferredModel}
                      onChange={(e) => setFormData({ ...formData, preferredModel: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#f7f7f8] border border-neutral-300 rounded-xl text-sm text-black focus:outline-none focus:border-black"
                    >
                      <option>Highway Fast-Charge Superhub (120kW/240kW)</option>
                      <option>Commercial & Retail Plaza Hub (60kW DC + 22kW AC)</option>
                      <option>Destination & Eco-Resort Partner (30kW DC / Dual AC)</option>
                    </select>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-neutral-100 border border-neutral-200 text-xs text-neutral-600">
                    🔒 <strong className="text-black">Confidential Site Assessment:</strong> Your property details are securely evaluated by our technical team and never shared with third parties.
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2.5 text-xs font-bold text-neutral-500 hover:text-black"
                    >
                      ← Back
                    </button>

                    <button
                      type="submit"
                      className="px-6 py-3 rounded-full bg-black text-white font-bold text-xs hover:bg-neutral-800 shadow-md flex items-center space-x-2 transition-transform active:scale-95"
                    >
                      <span>Submit Franchise Application</span>
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </form>
          ) : (
            <div className="text-center py-8 space-y-5 animate-in zoom-in-95">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto text-[#00d26a]">
                <CheckCircle2 className="w-8 h-8 text-emerald-800" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-bold">
                  Application Logged • Ref #EV-KL-2026-8492
                </span>
                <h4 className="text-2xl font-black text-black mt-1">
                  Thank you, {formData.name}!
                </h4>
                <p className="text-sm text-neutral-600 max-w-md mx-auto mt-2 leading-relaxed">
                  Our Kerala Regional Franchise Director has received your application for{" "}
                  <strong className="text-black">{formData.cityOrTown}, {formData.district}</strong>. We will contact you within 24 business hours to arrange the free site survey.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f7f7f8] border border-neutral-200 max-w-sm mx-auto text-xs text-neutral-700 text-left space-y-1.5">
                <div><strong>Selected Model:</strong> {formData.preferredModel}</div>
                <div><strong>Property:</strong> {formData.propertyType}</div>
                <div><strong>Direct Kerala Helpline:</strong> 1800-889-EVION (Mon-Sat 9AM-8PM)</div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full bg-black text-white font-bold text-xs hover:bg-neutral-800 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

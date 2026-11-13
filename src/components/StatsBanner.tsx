import React from "react";
import { Zap, ShieldCheck, Clock, Award } from "lucide-react";

export default function StatsBanner() {
  const stats = [
    {
      value: "145+",
      label: "Active Charging Guns",
      sublabel: "Across Kerala Highways & Cities",
      icon: <Zap className="w-4 h-4 text-[#00d26a]" />,
    },
    {
      value: "99.6%",
      label: "Network Uptime",
      sublabel: "24/7 Cloud Monitored via OCPP 2.0",
      icon: <ShieldCheck className="w-4 h-4 text-[#00d26a]" />,
    },
    {
      value: "10-15 Min",
      label: "A Day's Charge",
      sublabel: "20% to 80% Fast DC Top-up",
      icon: <Clock className="w-4 h-4 text-[#00d26a]" />,
    },
    {
      value: "₹2.2 Lakh",
      label: "Avg. Partner Net/Mo",
      sublabel: "High Yield Turnkey Franchise",
      icon: <Award className="w-4 h-4 text-[#00d26a]" />,
    },
  ];

  return (
    <section className="bg-white border-b border-neutral-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col justify-start space-y-1">
              <div className="flex items-center space-x-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                {stat.icon}
                <span>{stat.label}</span>
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-neutral-500 font-medium">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

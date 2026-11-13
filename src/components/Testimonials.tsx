import React from "react";
import { MapPin, TrendingUp, Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      partner: "Suresh Kurian",
      role: "Highway Plaza & Food Court Owner",
      location: "NH-66 Cherthala, Alappuzha",
      stat: "₹2.9 Lakhs/mo",
      statLabel: "Average Net Profit",
      quote:
        "Converting 4 parking bays along our highway restaurant into an Evion Superhub was the best decision. EV owners from Kochi and Trivandrum stop for 30 minutes, charge their cars, and dine in our restaurant. Evion handled the KSEB power sanction smoothly.",
    },
    {
      partner: "Anjali Menon",
      role: "Managing Director, Green Hills Resort",
      location: "Pallivasal, Munnar",
      stat: "+34% Bookings",
      statLabel: "EV Traveler Occupancy",
      quote:
        "Luxury tourists driving EVs from Bangalore and Kochi used to hesitate visiting the hills due to charging fears. Installing Evion fast chargers made our resort a certified EV hub on the tourist circuit. The revenue split is automated every Monday.",
    },
    {
      partner: "Faizal Mohammed",
      role: "Commercial Complex Landlord",
      location: "Seaport-Airport Road, Kochi",
      stat: "14 Months",
      statLabel: "Complete Capex Payback",
      quote:
        "We had unused corner space in our tech park complex. Evion came in, laid down the civil foundation, installed dual 120kW chargers, and connected everything to the cloud. The chargers have had zero breakdown even during the heavy monsoon.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white text-neutral-900 border-b border-neutral-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-bold uppercase tracking-wider mb-4 border border-neutral-200">
            <Star className="w-3.5 h-3.5 fill-[#00d26a] text-[#00d26a]" />
            <span>Kerala Partner Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black mb-4">
            Trusted by Commercial Property Owners Across Kerala
          </h2>
          <p className="text-base sm:text-lg text-neutral-600">
            Hear from landowners, resort operators, and commercial building hosts who partnered with Evion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#f7f7f8] border border-neutral-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-black transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-white border border-neutral-200">
                    <TrendingUp className="w-5 h-5 text-black" />
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-black text-black font-mono">
                      {rev.stat}
                    </div>
                    <div className="text-[10px] text-neutral-500 uppercase font-bold">
                      {rev.statLabel}
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-200 space-y-1">
                <div className="text-sm font-bold text-black">{rev.partner}</div>
                <div className="text-xs text-neutral-500">{rev.role}</div>
                <div className="flex items-center text-[11px] text-neutral-700 font-medium pt-0.5">
                  <MapPin className="w-3 h-3 mr-1 text-black shrink-0" />
                  <span>{rev.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

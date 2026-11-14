import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://evioncharging.com"
  ),
  title: "Evion Charging | Fast EV Charging Network & Franchise in Kerala",
  description:
    "A day's charge in 10 minutes. Kerala's premier electric vehicle charging station network and turnkey franchise partner.",
  keywords: [
    "EV charging Kerala",
    "electric car charging franchise",
    "Evion charging",
    "EV franchise Kerala",
    "Ather style EV charging",
    "Kochi EV charger",
    "DC fast charger franchise",
    "highway EV charging station"
  ],
  authors: [{ name: "Evion Power Solutions Pvt. Ltd." }],
  openGraph: {
    title: "Evion Charging | Fast EV Charging Network & Franchise in Kerala",
    description:
      "A day's charge, in 10 minutes. High-yield EV charging station franchise opportunities across Kerala.",
    images: ["/images/hero-slide-ather-style.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-[#00d26a] selection:text-black">
        {children}
      </body>
    </html>
  );
}

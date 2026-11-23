import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

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
    images: ["/images/evion-station-family-hub.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const strip = () => {
                    document.querySelectorAll('[fdprocessedid]').forEach(el => el.removeAttribute('fdprocessedid'));
                  };
                  strip();
                  if (typeof MutationObserver !== 'undefined') {
                    const observer = new MutationObserver(strip);
                    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['fdprocessedid'], subtree: true });
                    setTimeout(() => observer.disconnect(), 2500);
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-[#00b4d8] selection:text-white relative"
        suppressHydrationWarning
      >
        {/* Global Tactile Paper Texture Layers across Entire Website */}
        <div
          className="fixed inset-0 pointer-events-none z-[99999] opacity-[0.24] bg-repeat"
          style={{
            backgroundImage: "url('/images/paper-texture.png')",
            backgroundSize: "360px auto",
            mixBlendMode: "multiply",
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />
        <div
          className="fixed inset-0 pointer-events-none z-[99999] opacity-[0.14] bg-repeat"
          style={{
            backgroundImage: "url('/images/paper-texture.png')",
            backgroundSize: "360px auto",
            mixBlendMode: "overlay",
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

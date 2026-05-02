import SmoothScroll from "./components/SmoothScroll";
import TransitionProvider from "./components/TransitionProvider";
import { PortfolioProvider } from "./context/PortfolioContext";
import "./globals.css";

import localFont from "next/font/local";

export const mons = localFont({
  src: "../public/font/Mons.woff2",
  variable: "--font-mons",
  display: "swap",
});

export const impact = localFont({
  src: "../public/font/Impact.woff2",
  variable: "--font-impact",
  display: "swap",
});

export const bebas = localFont({
  src: "../public/font/Bebas.woff2",
  variable: "--font-bebas",
  display: "swap",
});

export const space = localFont({
  src: "../public/font/space.woff2",
  variable: "--font-space",
  display: "swap",
});

export const outfit = localFont({
  src: "../public/font/outfit.woff2",
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "Sai Krishna",
  description: "Sai Krishna",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` ${mons.variable} ${impact.variable} ${bebas.variable} ${space.variable} ${outfit.variable} `}
      >
        {/* TransitionProvider handles loader + page transitions */}
        <TransitionProvider>
          <PortfolioProvider>
            <SmoothScroll>{children}</SmoothScroll>
          </PortfolioProvider>
        </TransitionProvider>
      </body>
    </html>
  );
}

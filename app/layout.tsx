import SmoothScroll from "./components/SmoothScroll";
import TransitionProvider from "./components/TransitionProvider";
import { PortfolioProvider } from "./context/PortfolioContext";
import "./globals.css";

export const metadata = {
  title: "Sai Krishna",
  description: "Sai Krishna",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
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

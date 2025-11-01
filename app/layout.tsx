import type { Metadata } from "next";
import "./globals.css";
import TransitionProvider from "./components/TransitionProvider";

export const metadata: Metadata = {
  title: "Sai Portfolio",
  description: "Personal portfolio by Sai Krishna",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}

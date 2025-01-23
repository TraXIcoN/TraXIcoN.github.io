import type { Metadata } from "next";
import { Inter, Saira_Extra_Condensed } from "next/font/google";
import "./globals.css";
import Navigation from "./components/layout/Navigation";
import LoadingScreen from "./components/layout/LoadingScreen";
import Background from "./components/layout/Background";

const inter = Inter({ subsets: ["latin"] });
const saira = Saira_Extra_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-saira",
});

export const metadata: Metadata = {
  title: "Aditya Mohan's Portfolio",
  description:
    "Explore Aditya Mohan's portfolio, showcasing expertise in full-stack development, data engineering, and innovative projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} ${saira.variable} relative min-h-screen`}
      >
        <div className="relative z-10">
          <LoadingScreen />
          <div id="main-content" className="hidden">
            <Navigation />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

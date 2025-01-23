import { Metadata } from "next";
import { Saira } from "next/font/google";
import ClientLayout from "./components/layout/ClientLayout";
import "./globals.css";

const saira = Saira({
  subsets: ["latin"],
  display: "swap",
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
    <html lang="en" suppressHydrationWarning>
      <body className={saira.variable}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "../shared/ThemeContext";
import LoadingScreen from "./LoadingScreen";
import Navigation from "./Navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => setIsContentVisible(true), 100);
    }
  }, [isLoading]);

  return (
    <ThemeProvider>
      {isLoading && (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      )}
      <div
        className={`transition-opacity duration-500 ${
          isContentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navigation />
        {children}
      </div>
    </ThemeProvider>
  );
}

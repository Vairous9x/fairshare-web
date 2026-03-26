// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ToastProvider } from "@/providers/toast-provider";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "FairShare",
  description: "Financial collaboration made simple",
  manifest: "/manifest.json",
  icons: { apple: "/apple-icon.png" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ToastProvider>
            {children}
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

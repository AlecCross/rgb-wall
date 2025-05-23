// layout.tsx — СЕРВЕРНИЙ компонент, не використовує useEffect
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { ServiceWorkerRegister } from "../components/ServiceWorkerRegister"; // імпортуй

const APP_NAME = "Wallpaper";
const APP_DESCRIPTION = "RGB Wallpaper Generator PWA";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_NAME,
    template: "%s - NJS App",
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_NAME,
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    shortcut: "/favicon.webp",
    apple: [{ url: "/icons/apple-touch-icon.webp", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <style>{`
          html, body, #__next {
            height: 100%;
          }
          #__next {
            margin: 0 auto;
          }
          h1 {
            text-align: center;
          }
        `}</style>
      </head>
      <body>
        <ServiceWorkerRegister /> {/* Додаємо SW реєстратор */}
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import ClientInit from "@/components/ClientInit";

export const metadata: Metadata = {
  title: "Galops — Révise tes Galops FFE",
  description:
    "Cours, fiches, QCM corrigés et gamification pour réviser tes Galops FFE (1 à 7). Mobile-first, installable, utilisable hors-ligne.",
  manifest: "/manifest.webmanifest",
  applicationName: "Galops",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Galops",
  },
  icons: {
    icon: [{ url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#3f8a52",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

// Pose le thème avant l'hydratation pour éviter tout flash (FOUC).
const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('galops.theme');
    var d = t ? t === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (d) document.documentElement.classList.add('dark');
  } catch(e){}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ClientInit />
        <main className="app-main mx-auto min-h-screen max-w-2xl px-4 pt-4">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}

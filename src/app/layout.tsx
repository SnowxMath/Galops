import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BottomNav } from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "Galops FFE — Révision",
  description:
    "Formation et révision des Galops FFE 1 à 7 : cours, fiches, QCM corrigés et expliqués, progression et gamification. Outil de révision non officiel.",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Galops FFE",
  },
  icons: {
    icon: "/icons/icon.svg",
    apple: "/icons/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#2c6540",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="min-h-dvh">
        {/* Contenu principal, avec marge basse pour la bottom-bar. */}
        <main className="mx-auto w-full max-w-screen-sm px-4 pb-24 pt-6">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}

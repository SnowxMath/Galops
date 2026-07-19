"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Onglets de la barre de navigation basse (navigation au pouce). */
const ONGLETS = [
  { href: "/cours", libelle: "Cours", icone: "📖" },
  { href: "/reviser", libelle: "Réviser", icone: "🗂️" },
  { href: "/qcm", libelle: "QCM", icone: "✅" },
  { href: "/profil", libelle: "Profil", icone: "👤" },
] as const;

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navigation principale"
      className="fixed inset-x-0 bottom-0 z-20 border-t border-galop-200 bg-white/95 backdrop-blur dark:border-galop-700 dark:bg-galop-800/95"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="mx-auto flex max-w-screen-sm items-stretch justify-around">
        {ONGLETS.map((onglet) => {
          const actif = pathname.startsWith(onglet.href);
          return (
            <li key={onglet.href} className="flex-1">
              <Link
                href={onglet.href}
                aria-current={actif ? "page" : undefined}
                className={`flex min-h-[56px] flex-col items-center justify-center gap-0.5 py-2 text-xs font-medium transition-colors ${
                  actif
                    ? "text-galop-600 dark:text-galop-200"
                    : "text-galop-400 dark:text-galop-400"
                }`}
              >
                <span className="text-xl" aria-hidden>
                  {onglet.icone}
                </span>
                {onglet.libelle}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/", label: "Accueil", icon: "🏠", match: (p: string) => p === "/" },
  { href: "/cours", label: "Cours", icon: "📖", match: (p: string) => p.startsWith("/cours") || p.startsWith("/galop") },
  { href: "/qcm", label: "QCM", icon: "❓", match: (p: string) => p.startsWith("/qcm") },
  { href: "/reviser", label: "Réviser", icon: "🗂️", match: (p: string) => p.startsWith("/reviser") },
  { href: "/profil", label: "Profil", icon: "🏅", match: (p: string) => p.startsWith("/profil") },
];

export default function BottomNav() {
  const pathname = usePathname() || "/";

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-200 bg-white/95 backdrop-blur dark:border-brand-700 dark:bg-brand-900/95"
      style={{ paddingBottom: "var(--safe-bottom)" }}
      aria-label="Navigation principale"
    >
      <ul className="mx-auto flex max-w-2xl">
        {TABS.map((t) => {
          const active = t.match(pathname);
          return (
            <li key={t.href} className="flex-1">
              <Link
                href={t.href}
                className={`flex flex-col items-center gap-0.5 py-2.5 text-xs font-medium transition ${
                  active
                    ? "text-prairie-600 dark:text-prairie-400"
                    : "text-brand-500 dark:text-brand-400"
                }`}
                aria-current={active ? "page" : undefined}
              >
                <span className={`text-xl leading-none ${active ? "scale-110" : ""} transition`}>
                  {t.icon}
                </span>
                {t.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

/** En-tête de page : titre (+ retour optionnel) et bascule de thème. */
export default function AppHeader({
  title,
  emoji,
  back,
}: {
  title: string;
  emoji?: string;
  back?: string;
}) {
  return (
    <header className="mb-4 flex items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        {back && (
          <Link
            href={back}
            className="rounded-full border border-brand-300 bg-white p-2 text-lg leading-none shadow-sm dark:border-brand-600 dark:bg-brand-800"
            aria-label="Retour"
          >
            ←
          </Link>
        )}
        <h1 className="text-2xl font-extrabold tracking-tight">
          {emoji && <span className="mr-1">{emoji}</span>}
          {title}
        </h1>
      </div>
      <ThemeToggle />
    </header>
  );
}

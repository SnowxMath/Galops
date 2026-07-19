import { LocalProgressStore } from "./local";
import { SupabaseProgressStore } from "./supabase";
import type { ProgressStore } from "./types";

/**
 * Fabrique du store de progression. Choisit l'implémentation selon
 * NEXT_PUBLIC_STORAGE_PROVIDER ("local" par défaut). La sync Supabase reste
 * désactivée tant que la variable ne vaut pas "supabase".
 */
export function createProgressStore(): ProgressStore {
  const provider = process.env.NEXT_PUBLIC_STORAGE_PROVIDER ?? "local";
  if (provider === "supabase") return new SupabaseProgressStore();
  return new LocalProgressStore();
}

export * from "./types";

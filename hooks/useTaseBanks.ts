"use client";
import { useEffect, useState } from "react";

export type TaseBank = {
  code: string;
  name: string;
};

export function useTaseBanks() {
  const [data, setData] = useState<TaseBank[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        setLoading(true);
        const res = await fetch("/api/tase/banks");
        if (!res.ok) throw new Error(`API ${res.status}`);
        const banks: TaseBank[] = await res.json();
        if (mounted) setData(banks);
      } catch (e: any) {
        if (mounted) setError(e.message ?? "Unknown error");
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();
    return () => {
      mounted = false;
    };
  }, []);

  return { data, loading, error };
}
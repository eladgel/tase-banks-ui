"use client";

import { BankLogo } from "./BankLogo";
import { useTaseBanks } from "../hooks/useTaseBanks";

export default function BankLogoGrid() {
  const { data, loading, error } = useTaseBanks();

  if (loading) return <p>Loading bank logos…</p>;
  if (error)   return <p className="text-red-600">Error: {error}</p>;

  return (
    <div className="grid auto-fit-[minmax(120px,1fr)] gap-6">
      {data.map((bank) => (
        <BankLogo key={bank.code} bank={bank} size={80} />
      ))}
    </div>
  );
}

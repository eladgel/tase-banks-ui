"use client";
import Image from "next/image";
import { useTaseBanks } from "../hooks/useTaseBanks";

export default function BankLogoGrid() {
  const { data, loading, error } = useTaseBanks();

  if (loading) return <p>Loading banks…</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;

  return (
    <div
      dir="rtl"
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4"
    >
      {data.map((bank) => (
        <div
          key={bank.code}
          className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center aspect-square transition-transform duration-200 ease-in-out hover:scale-105"
        >
          <Image
            src={`https://market.tase.co.il/assets/img/tase_members/heb/00${bank.code}.png`}
            alt={bank.name}
            width={100} // Set appropriate width
            height={48} // Set appropriate height, maintaining aspect ratio
            className="h-12 w-auto mx-auto mb-2"
          />
          <p className="text-center text-xs sm:text-sm font-medium text-gray-700">
            {bank.name}
          </p>
        </div>
      ))}
    </div>
  );
}

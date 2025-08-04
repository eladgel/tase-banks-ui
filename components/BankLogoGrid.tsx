"use client";

import Image from "next/image";
import { AlertCircle } from "lucide-react";

import { useTaseBanks } from "@/hooks/useTaseBanks";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function BankLogoGrid() {
  const { data, loading, error } = useTaseBanks();

  if (error) {
    return (
      <Alert variant="destructive" dir="rtl">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>שגיאה</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div
      dir="rtl"
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4"
    >
      {loading
        ? Array.from({ length: 10 }).map((_, i) => <BankCardSkeleton key={i} />)
        : data.map((bank) => <BankCard key={bank.code} bank={bank} />)}
    </div>
  );
}

function BankCard({ bank }: { bank: { code: string; name: string } }) {
  return (
    <Card className="flex flex-col items-center justify-center text-center p-2 transition-transform duration-200 ease-in-out hover:scale-105">
      <CardHeader className="p-2">
        <Image
          src={`https://market.tase.co.il/assets/img/tase_members/heb/00${bank.code}.png`}
          alt={bank.name}
          width={100}
          height={48}
          className="h-12 w-auto mx-auto"
        />
      </CardHeader>
      <CardContent className="p-2">
        <p className="text-xs sm:text-sm font-medium text-gray-700">
          {bank.name}
        </p>
      </CardContent>
    </Card>
  );
}

function BankCardSkeleton() {
  return (
    <Card className="flex flex-col items-center justify-center p-2">
      <CardHeader className="p-2">
        <Skeleton className="h-12 w-24" />
      </CardHeader>
      <CardContent className="p-2">
        <Skeleton className="h-4 w-20" />
      </CardContent>
    </Card>
  );
}
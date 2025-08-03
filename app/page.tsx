import BankLogoGrid from "@/components/BankLogoGrid";

export default function Page() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">TASE-Listed Banks</h1>
      <BankLogoGrid />
    </main>
  );
}

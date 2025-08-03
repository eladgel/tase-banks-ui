import { NextRequest, NextResponse } from "next/server";

const ENDPOINT = "https://api.tase.co.il/api/commissions/loadcommissions";
const ORIGIN = "https://api.tase.co.il";

export async function GET(_req: NextRequest) {
  try {
    const res = await fetch(ENDPOINT, {
      headers: {
        accept: "application/json",
        referer: "https://market.tase.co.il/",
        "user-agent": "Mozilla/5.0",
      },
      // revalidate once a week – tweak to taste
      next: { revalidate: 60 * 60 * 24 * 7 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `TASE responded ${res.status}` },
        { status: 502 }
      );
    }

    const json = await res.json();
    const list =
      json.data /* typical key */ ?? json.memberList /* rare fallback */ ?? [];

    const banks = list
      .filter((m: any) => m.IsBank)
      .map((m: any) => ({
        code: String(m.MemberCode),
        name: m.BankCompanyName.trim(),
        logo: `${ORIGIN}${m.BankCompanyThumbnailUrl}`,
      }));

    return NextResponse.json(banks, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Proxy failed" }, { status: 500 });
  }
}

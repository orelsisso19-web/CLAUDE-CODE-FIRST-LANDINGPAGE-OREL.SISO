import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas/contact";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 422 },
    );
  }

  if (parsed.data.website && parsed.data.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const endpoint = process.env.KESHLO_ENDPOINT;
  if (!endpoint) {
    console.error("KESHLO_ENDPOINT is not set");
    return NextResponse.json(
      { error: "Server is not configured to accept submissions" },
      { status: 500 },
    );
  }

  const { website: _honeypot, ...payload } = parsed.data;

  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!upstream.ok) {
      console.error("Keshlo upstream error", upstream.status);
      return NextResponse.json(
        { error: "Upstream request failed" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Keshlo fetch error", err);
    return NextResponse.json(
      { error: "Network error reaching upstream" },
      { status: 502 },
    );
  }
}

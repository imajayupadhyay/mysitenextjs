import { NextResponse } from "next/server";
import type { ResultSetHeader } from "mysql2";
import { pool } from "@/lib/db";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const phone = typeof body?.phone === "string" ? body.phone.trim() : "";
    const message = typeof body?.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (
      name.length > 120 ||
      email.length > 160 ||
      phone.length > 40 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { error: "One or more fields exceed the allowed length." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const [result] = await pool.execute<ResultSetHeader>(
      "INSERT INTO contact_messages (name, email, phone, message) VALUES (?, ?, ?, ?)",
      [name, email, phone || null, message]
    );

    return NextResponse.json({ ok: true, id: result.insertId }, { status: 201 });
  } catch (err) {
    console.error("[contact] failed to save message:", err);

    // When DEBUG_API=1, return the real error so we can diagnose
    // without needing shell/log access on the host. Turn off in prod
    // once the form is verified working.
    if (process.env.DEBUG_API === "1") {
      const e = err as { code?: string; errno?: number; sqlMessage?: string; message?: string };
      return NextResponse.json(
        {
          error: "Server error (debug)",
          code: e?.code ?? null,
          errno: e?.errno ?? null,
          sqlMessage: e?.sqlMessage ?? null,
          message: e?.message ?? String(err),
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}

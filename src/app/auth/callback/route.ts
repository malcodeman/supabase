import { NextResponse } from "next/server";
import { createClient } from "@/app/utils/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  if (code) {
    const supabase = createClient();
    try {
      const { data, error } = await supabase.auth.exchangeCodeForSession(code);

      if (!error) {
        return NextResponse.redirect(`${origin}/dashboard`);
      }

      return Response.json({ data, error });
    } catch (error) {
      return Response.json({ error });
    }
  }

  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}

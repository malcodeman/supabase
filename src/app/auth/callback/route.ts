import { NextResponse } from "next/server";
import { createClient } from "@/app/utils/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  if (code) {
    const supabase = createClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    return Response.json({ data, error });

    // if (!error) {
    //   return NextResponse.redirect(`${origin}/dashboard`);
    // }
  }

  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}

import { NextResponse } from "next/server";
import { createClient } from "@/app/utils/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  if (code) {
    const supabase = createClient();

    return Response.json({ supabase });

    // const { error } = await supabase.auth.exchangeCodeForSession(code);

    // if (error) {
    //   return Response.json({ error });
    // }

    // if (!error) {
    //   return NextResponse.redirect(`${origin}/dashboard`);
    // }
  }

  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}

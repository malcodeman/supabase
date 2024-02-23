import { NextResponse } from "next/server";
import { createClient } from "@/app/utils/supabase/server";

export async function POST(request: Request) {
  const { origin } = new URL(request.url);
  const supabase = createClient();

  await supabase.auth.signOut();

  return NextResponse.redirect(`${origin}/`, {
    status: 301,
  });
}

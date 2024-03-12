"use server";
import { redirect } from "next/navigation";
import { createClient } from "@/app/utils/supabase/server";
import { getRedirectUrl } from "@/app/utils/supabase/getRedirectUrl";

export const signInWithOAuth = async () => {
  const supabase = createClient();
  const { error, data } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: getRedirectUrl(),
    },
  });

  if (error) {
    redirect("/error");
  }

  redirect(data.url);
};

export const signOut = async () => {
  const supabase = createClient();

  await supabase.auth.signOut();

  redirect("/");
};

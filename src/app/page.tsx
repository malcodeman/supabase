"use client";
import { redirect } from "next/navigation";
import { createClient } from "@/app/utils/supabase/client";
import { getRedirectUrl } from "@/app/utils/supabase/getRedirectUrl";

export default function Home() {
  const login = async () => {
    const supabase = createClient();
    const { data } = await supabase.auth.signInWithOAuth({
      options: {
        redirectTo: getRedirectUrl(),
      },
      provider: "github",
    });

    if (data.url) {
      redirect(data.url);
    }
  };

  return (
    <form>
      <button
        formAction={login}
        className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Sign in with GitHub
      </button>
    </form>
  );
}

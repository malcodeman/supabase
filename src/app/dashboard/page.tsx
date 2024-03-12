import { createClient } from "@/app/utils/supabase/server";
import { signOut } from "@/app/actions";

export default async function Dashboard() {
  const supabase = createClient();
  const user = await supabase.auth.getUser();

  return (
    <div>
      Dashboard
      <h1>Hi {user.data.user?.email}</h1>
      <form>
        <button formAction={signOut} type="submit">
          Sign Out
        </button>
      </form>
    </div>
  );
}

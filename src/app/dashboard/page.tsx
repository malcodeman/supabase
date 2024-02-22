import { createClient } from "@/app/utils/supabase/server";

export default async function Dashboard() {
  const supabase = createClient();
  const user = await supabase.auth.getUser();

  return (
    <div>
      Dashboard
      <h1>Hi {user.data.user?.email}</h1>
    </div>
  );
}

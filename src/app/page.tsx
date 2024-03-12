import { signInWithOAuth } from "@/app/actions";

export default function Home() {
  return (
    <form>
      <button
        formAction={signInWithOAuth}
        className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Sign in with GitHub
      </button>
    </form>
  );
}

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div>
      Landing Page (Unprotected)

      <div>
        <Link href="/sign-in">
          <Button>Sign in</Button>
        </Link>
      </div>
      <div>
        <Link href="/sign-up">
          <Button>Sign Up</Button>
        </Link>
      </div>

    </div>
  );
}

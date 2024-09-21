import * as React from "react";

import { Button } from "./ui/button";
import Link from "next/link";
import { auth } from "@/auth";
import { handleSignOut } from "@/actions/authActions";

export async function NavbarComponent() {
  const session = await auth();

  return (
    <div>
      <nav className="p-4 max-w-full flex items-center justify-between border-b border-b-slate-100">
        <div className="text-xl">Auth.js Demo</div>
        {!session ? (
          <Link href="/signin">
            <Button variant="outline">Sign in</Button>
          </Link>
        ) : (
          <form action={handleSignOut}>
            <Button variant="default" type="submit">
              Sign Out
            </Button>
          </form>
        )}
      </nav>
    </div>
  );
}

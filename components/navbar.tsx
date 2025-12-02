"use client";

import { GithubIcon, LogIn } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const navbarItems = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Pricing", href: "/pricing" },
    { name: "Profile", href: "/profile" },
  ];
  return (
    <>
      <header className="sticky top-0 left-0 w-full px-24 py-4 border-b bg-white z-10">
        <nav className="w-full grid grid-cols-3 items-center">
          {/* logo */}
          <div className="text-lg">Radium</div>
          <div className="flex items-center gap-4 text-sm text-primary/60">
            {navbarItems.map((e) => {
              return (
                <Link
                  href={e.href}
                  className="hover:text-primary cursor-pointer hover:bg-accent py-1 px-2"
                  key={e.name}
                >
                  {e.name}
                </Link>
              );
            })}
          </div>
          <div className="flex gap-2 justify-end">
            <Button
              onClick={() => {
                window.location.href =
                  "http://localhost:8000/api/v1/auth/github/";
              }}
              className="px-2"
              size={"sm"}
              variant={"outline"}
            >
              Connect to Github
              <GithubIcon />
            </Button>
            <Button
              onClick={() => {
                router.push("/login");
              }}
              className="px-2"
              size={"sm"}
            >
              Login
              <LogIn />
            </Button>
          </div>
        </nav>
      </header>
    </>
  );
}

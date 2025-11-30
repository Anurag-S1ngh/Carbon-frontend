"use client";

import { LoginForm } from "@/components/login-form";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
      <Button
        onClick={() => {
          window.location.href = "http://localhost:8000/api/v1/auth/github/";
        }}
        className="px-2"
        size={"sm"}
        variant={"outline"}
      >
        Connect to Github
        <GithubIcon />
      </Button>
    </div>
  );
}

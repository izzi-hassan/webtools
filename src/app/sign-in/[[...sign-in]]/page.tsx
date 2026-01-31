import { SignIn } from "@clerk/nextjs";

import { Card } from "@/components/ui/card";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 px-4 py-10">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <SignIn routing="path" path="/sign-in" />
      </Card>
    </div>
  );
}

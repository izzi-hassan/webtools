import { SignUp } from "@clerk/nextjs";

import { Card } from "@/components/ui/card";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 px-4 py-10">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <SignUp routing="path" path="/sign-up" />
      </Card>
    </div>
  );
}

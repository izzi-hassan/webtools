import { OrganizationList } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { Card } from "@/components/ui/card";

export default function SelectOrgPage() {
  const { orgId } = auth();

  if (orgId) {
    redirect("/");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 px-4 py-10">
      <Card className="w-full max-w-2xl p-6 shadow-lg">
        <OrganizationList
          afterSelectOrganizationUrl="/"
          afterCreateOrganizationUrl="/"
        />
      </Card>
    </div>
  );
}

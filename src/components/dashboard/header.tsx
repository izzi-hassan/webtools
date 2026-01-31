"use client";

import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

import { ModeToggle } from "@/components/mode-toggle";

export function DashboardHeader() {
  return (
    <header className="flex w-full flex-wrap items-center justify-between gap-4 border-b bg-background px-4 py-4 lg:px-8">
      <div className="flex items-center gap-3">
        <OrganizationSwitcher
          hidePersonal
          afterSelectOrganizationUrl="/"
          afterCreateOrganizationUrl="/"
          appearance={{
            elements: {
              organizationSwitcherTrigger: "h-9 px-2 text-sm"
            }
          }}
        />
      </div>
      <div className="flex items-center gap-3">
        <ModeToggle />
        <UserButton afterSignOutUrl="/sign-in" />
      </div>
    </header>
  );
}

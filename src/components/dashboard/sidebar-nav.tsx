"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const navItems = [
  { title: "Dashboard", href: "/" },
  { title: "Properties", href: "/properties" },
  { title: "Team", href: "/team" },
  { title: "Billing", href: "/billing" },
  { title: "Settings", href: "/settings" }
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-full flex-col gap-6 bg-card px-4 py-6 lg:px-6">
      <div className="flex items-center gap-2 px-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <span className="text-sm font-semibold">AC</span>
        </div>
        <div>
          <p className="text-sm font-semibold">Acme Cloud</p>
          <p className="text-xs text-muted-foreground">Workspace</p>
        </div>
      </div>
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                isActive && "bg-muted text-foreground"
              )}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto rounded-lg border bg-muted/40 p-4 text-xs text-muted-foreground">
        <p className="font-semibold text-foreground">Pro tip</p>
        <p className="mt-1">Invite your team members to manage properties together.</p>
      </div>
    </aside>
  );
}

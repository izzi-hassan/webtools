import { DashboardHeader } from "@/components/dashboard/header";
import { SidebarNav } from "@/components/dashboard/sidebar-nav";

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-muted/40">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[260px_1fr]">
        <div className="hidden border-r bg-card lg:block">
          <SidebarNav />
        </div>
        <div className="flex min-h-screen flex-col">
          <DashboardHeader />
          <main className="flex-1 px-4 py-6 lg:px-8">{children}</main>
        </div>
      </div>
      <div className="border-t bg-card lg:hidden">
        <SidebarNav />
      </div>
    </div>
  );
}

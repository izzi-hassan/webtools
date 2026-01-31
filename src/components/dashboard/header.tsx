import { ModeToggle } from "@/components/mode-toggle";

export function DashboardHeader() {
  return (
    <header className="flex w-full items-center justify-between border-b bg-background px-4 py-4 lg:px-8">
      <div>
        <p className="text-sm text-muted-foreground">Organization</p>
        <h1 className="text-lg font-semibold">Acme Properties</h1>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden text-right text-sm md:block">
          <p className="font-medium">Alex Morgan</p>
          <p className="text-xs text-muted-foreground">alex@acme.co</p>
        </div>
        <ModeToggle />
      </div>
    </header>
  );
}

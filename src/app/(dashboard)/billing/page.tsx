import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

export default function BillingPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm text-muted-foreground">Subscription</p>
        <h2 className="text-2xl font-semibold">Billing</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Plan</CardTitle>
          <CardDescription>Manage your subscription and usage.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-3xl font-semibold">Growth</p>
            <p className="text-sm text-muted-foreground">$79 per month · Renews Apr 30</p>
          </div>
          <Button variant="outline">Upgrade Plan</Button>
        </CardContent>
      </Card>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

const properties = [
  { name: "Maple Street Apartments", status: "Active", createdAt: "Mar 12, 2024" },
  { name: "Sunset Villas", status: "Active", createdAt: "Jan 28, 2024" },
  { name: "Riverside Lofts", status: "Draft", createdAt: "Nov 03, 2023" },
  { name: "Cedar Heights", status: "Active", createdAt: "Oct 14, 2023" }
];

export default function PropertiesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Portfolio</p>
          <h2 className="text-2xl font-semibold">Properties</h2>
        </div>
        <Button>Add Property</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Property List</CardTitle>
          <CardDescription>Manage active and upcoming properties.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {properties.map((property) => (
                <TableRow key={property.name}>
                  <TableCell className="font-medium">{property.name}</TableCell>
                  <TableCell>{property.status}</TableCell>
                  <TableCell>{property.createdAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

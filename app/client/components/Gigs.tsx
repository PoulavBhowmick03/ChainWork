import { Button } from "@/components/ui/button";
import { DataTable } from "./payments/data-table";
const EmptyState = ({ message }: { message: string }) => (
    <div className="text-center py-12">
      <p className="text-gray-500 text-lg">{message}</p>
    </div>
  );

  
  const MyGigs = () => {
    const gigs = [
      { id: 1, title: "Web Development", price: "0.5 ETH", orders: 5, rating: 4.9 },
      { id: 2, title: "Logo Design", price: "0.2 ETH", orders: 3, rating: 4.7 },
      { id: 3, title: "Content Writing", price: "0.1 ETH", orders: 2, rating: 5.0 },
    ];
  
    const columns = [
      { accessorKey: "title", header: "Gig Title" },
      { accessorKey: "price", header: "Price" },
      { accessorKey: "orders", header: "Active Orders" },
      { accessorKey: "rating", header: "Rating" },
      {
        id: "actions",
        cell: ({ row }: { row: any }) => (
          <Button variant="outline" size="sm" onClick={() => console.log("Edit gig", row.original.id)}>
            Edit
          </Button>
        ),
      },
    ];
  
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">My Gigs</h2>
        {gigs.length > 0 ? (
          <DataTable columns={columns} data={gigs} />
        ) : (
          <EmptyState message="You haven't created any gigs yet. Click 'Create New Gig' to get started!" />
        )}
        <Button onClick={() => console.log("Navigate to Create Gig")}>Create New Gig</Button>
      </div>
    );
  };
  export default MyGigs;
  
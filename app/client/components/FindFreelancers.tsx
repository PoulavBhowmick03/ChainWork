import { Input } from "@/components/ui/input";
import { DataTable } from "@/app/client/components/payments/data-table";

const FindFreelancers = () => {
    const freelancers = [
      { id: 1, name: "Alice", skills: "Web Development", rating: 4.9, completedJobs: 47 },
      { id: 2, name: "Bob", skills: "Graphic Design", rating: 4.7, completedJobs: 32 },
      { id: 3, name: "Charlie", skills: "Content Writing", rating: 4.8, completedJobs: 25 },
    ];
  
    const columns = [
      { accessorKey: "name", header: "Name" },
      { accessorKey: "skills", header: "Skills" },
      { accessorKey: "rating", header: "Rating" },
      { accessorKey: "completedJobs", header: "Completed Jobs" },
    ];
  
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Find Freelancers</h2>
        <Input placeholder="Search freelancers by skill or name" className="mb-4" />
        <DataTable columns={columns} data={freelancers} />
      </div>
    );
  };
  export default FindFreelancers;
  
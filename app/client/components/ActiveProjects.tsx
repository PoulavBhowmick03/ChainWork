import { DataTable } from "./payments/data-table";

const ActiveProjects = () => {
    const projects = [
      { id: 1, title: "E-commerce Website", freelancer: "Alice", dueDate: "2024-08-15", status: "In Progress" },
      { id: 2, title: "Logo Redesign", freelancer: "Bob", dueDate: "2024-08-10", status: "Review" },
      { id: 3, title: "Content Strategy", freelancer: "Charlie", dueDate: "2024-08-20", status: "In Progress" },
    ];
  
    const columns = [
      { accessorKey: "title", header: "Project Title" },
      { accessorKey: "freelancer", header: "Freelancer" },
      { accessorKey: "dueDate", header: "Due Date" },
      { accessorKey: "status", header: "Status" },
    ];
  
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Active Projects</h2>
        <DataTable columns={columns} data={projects} />
      </div>
    );
  };
  export default ActiveProjects;
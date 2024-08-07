import { DataTable } from "./payments/data-table";

const Messages = () => {
    const messages = [
        { id: 1, from: "Alice", subject: "Project Update", date: "2024-08-05" },
        { id: 2, from: "Bob", subject: "Revision Request", date: "2024-08-04" },
        { id: 3, from: "Charlie", subject: "New Proposal", date: "2024-08-03" },
    ];

    const columns = [
        { accessorKey: "from", header: "From" },
        { accessorKey: "subject", header: "Subject" },
        { accessorKey: "date", header: "Date" },
    ];

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Messages</h2>
            <DataTable columns={columns} data={messages} />
        </div>
    );
};
export default Messages;
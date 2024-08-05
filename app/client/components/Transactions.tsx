import { DataTable } from "./payments/data-table";

const Transactions = () => {
    const transactions = [
      { id: 1, date: "2024-08-05", type: "Payment", amount: "0.5 ETH", status: "Completed" },
      { id: 2, date: "2024-08-03", type: "Withdrawal", amount: "1.2 ETH", status: "Pending" },
      { id: 3, date: "2024-08-01", type: "Payment", amount: "0.3 ETH", status: "Completed" },
    ];
  
    const columns = [
      { accessorKey: "date", header: "Date" },
      { accessorKey: "type", header: "Type" },
      { accessorKey: "amount", header: "Amount" },
      { accessorKey: "status", header: "Status" },
    ];
  
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Transaction History</h2>
        <DataTable columns={columns} data={transactions} />
      </div>
    );
  };
  export default Transactions;
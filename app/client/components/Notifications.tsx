  // Add a new component for displaying notifications
  // Add this component to handle empty states
  const EmptyState = ({ message }: { message: string }) => (
    <div className="text-center py-12">
      <p className="text-gray-500 text-lg">{message}</p>
    </div>
  );
  const Notifications = () => {
    const notifications = [
      { id: 1, message: "New order received for Web Development gig", date: "2024-08-05" },
      { id: 2, message: "Your withdrawal of 1.2 ETH has been processed", date: "2024-08-03" },
      { id: 3, message: "You've received a new message from Alice", date: "2024-08-01" },
    ];
  
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Notifications</h2>
        {notifications.length > 0 ? (
          <ul className="space-y-4">
            {notifications.map((notification) => (
              <li key={notification.id} className="bg-black p-4 rounded shadow">
                <p>{notification.message}</p>
                <p className="text-sm text-gray-500 mt-2">{notification.date}</p>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState message="No new notifications" />
        )}
      </div>
    );
  };
  export default Notifications;
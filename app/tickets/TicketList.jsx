const getTickets = async () => {
  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0,
    },
  });

  return res.json();
};

const TicketList = async () => {
  const tickets = await getTickets();

  return (
    <>
      {tickets.map((ticket) => {
        const { id, title, body, priority, user_email } = ticket;
        return (
          <div key={id} className="card my-5">
            <h3>{title}</h3>
            <p>{body.slice(0, 200)}...</p>
            <div className={`pill ${priority}`}>{priority} priority</div>
          </div>
        );
      })}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets, yay!</p>
      )}
    </>
  );
};

export default TicketList;

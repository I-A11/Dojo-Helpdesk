const getTicket = async (id) => {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  return res.json();
};

const TicketDetails = async ({ params }) => {
  const { title, body, priority, user_email } = await getTicket(params.id);

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{title}</h3>
        <small>Created by {user_email}</small>
        <p>{body}</p>
        <div className={`pill ${priority}`}>{priority} priority</div>
      </div>
    </main>
  );
};
export default TicketDetails;

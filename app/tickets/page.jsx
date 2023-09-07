import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../Loading";

const Tickets = () => {
  return (
    <main>
      <nav>
        <div>
          <h1>Tickets</h1>
          <p>
            <small>Currently open tickets</small>
          </p>
        </div>
      </nav>

      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
};

export default Tickets;

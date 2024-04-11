import { useSelector } from 'react-redux';
import TicketCard from '../TicketCard/TicketCard';
import ShowTicketsBtn from '../ShowTicketsBtn/ShowTicketsBtn';
import classes from './TicketsList.module.scss';

export default function TicketsList() {
  const { ticketsArr, ticketsForRender } = useSelector((state) => state.tickets);
  const mappedTicketsArr = ticketsArr
    .slice(0, ticketsForRender)
    .map((ticket) => (
      <TicketCard
        key={ticket.price + ticket.carrier + ticket.segments[0].date}
        price={ticket.price}
        carrier={ticket.carrier}
        segmentTo={ticket.segments[0]}
        segmentFrom={ticket.segments[1]}
      />
    ));

  return (
    <ul className={classes['tickets-list']}>
      {mappedTicketsArr}
      <ShowTicketsBtn />
    </ul>
  );
}

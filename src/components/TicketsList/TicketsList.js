import TicketCard from '../TicketCard/TicketCard';
import classes from './TicketsList.module.scss';

export default function TicketsList() {
  return (
    <ul className={classes['tickets-list']}>
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
    </ul>
  );
}

import { useSelector } from 'react-redux';

import TicketsList from '../TicketsList/TicketsList';
import ShowTicketsBtn from '../ShowTicketsBtn/ShowTicketsBtn';

import classes from './TicketsContainer.module.scss';

export default function TicketsContainer() {
  const { sortedTicketsArr } = useSelector((state) => state.tickets);

  return (
    <div className={classes['tickets-container']}>
      {sortedTicketsArr.length === 0 ? (
        <span className={classes['tickets-container__not-found']}>
          Рейсов, подходящих под заданные фильтры, не найдено
        </span>
      ) : (
        <>
          <TicketsList />
          <ShowTicketsBtn />
        </>
      )}
    </div>
  );
}

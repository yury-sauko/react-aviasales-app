import { useDispatch } from 'react-redux';

import { changeticketsForRender } from '../../store/tickets.slice';

import classes from './ShowTicketsBtn.module.scss';

export default function ShowTicketsBtn() {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className={classes['show-tickets-btn']}
      onClick={() => dispatch(changeticketsForRender())}
    >
      Показать еще 5 билетов!
    </button>
  );
}

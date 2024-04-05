import classes from './ShowTicketsBtn.module.scss';

export default function ShowTicketsBtn() {
  return (
    <button type="button" className={classes['show-tickets-btn']}>
      Показать еще 5 билетов!
    </button>
  );
}

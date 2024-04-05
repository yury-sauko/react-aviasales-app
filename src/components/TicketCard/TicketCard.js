import classes from './TicketCard.module.scss';
import carrierLogo from '../../img/s7-carrier-logo.svg';

export default function TicketCard() {
  return (
    <li className={classes['ticket-card']}>
      <div className={classes['ticket-card__header']}>
        <span className={classes['ticket-card__price']}>13 400 &#8381;</span>
        <div className={classes['ticket-card__img-wrapper']}>
          <img src={carrierLogo} className={classes['ticket-card__img']} alt="Air carrier logo" />
        </div>
      </div>
      <div className={classes['ticket-card__flight-option']}>
        <div className={classes['ticket-card__flight-option-col-container']}>
          <span className={classes['ticket-card__flight-option-header']}>MOW – HKT</span>
          <span className={classes['ticket-card__flight-option-text']}>10:45 – 08:00</span>
        </div>
        <div className={classes['ticket-card__flight-option-col-container']}>
          <span className={classes['ticket-card__flight-option-header']}>В пути</span>
          <span className={classes['ticket-card__flight-option-text']}>21ч 15м</span>
        </div>
        <div className={classes['ticket-card__flight-option-col-container']}>
          <span className={classes['ticket-card__flight-option-header']}>2 пересадки</span>
          <span className={classes['ticket-card__flight-option-text']}>HKG, JNB</span>
        </div>
      </div>
      <div className={classes['ticket-card__flight-option']}>
        <div className={classes['ticket-card__flight-option-col-container']}>
          <span className={classes['ticket-card__flight-option-header']}>MOW – HKT</span>
          <span className={classes['ticket-card__flight-option-text']}>11:20 – 00:50</span>
        </div>
        <div className={classes['ticket-card__flight-option-col-container']}>
          <span className={classes['ticket-card__flight-option-header']}>В пути</span>
          <span className={classes['ticket-card__flight-option-text']}>13ч 30м</span>
        </div>
        <div className={classes['ticket-card__flight-option-col-container']}>
          <span className={classes['ticket-card__flight-option-header']}>1 пересадка</span>
          <span className={classes['ticket-card__flight-option-text']}>HKG</span>
        </div>
      </div>
    </li>
  );
}

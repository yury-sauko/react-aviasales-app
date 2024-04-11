import { addMinutes } from 'date-fns';
import PropTypes from 'prop-types';
import classes from './TicketCard.module.scss';

export default function TicketCard({ price, carrier, segmentTo, segmentFrom }) {
  const {
    origin: originTo,
    destination: destinationTo,
    date: dateTo,
    stops: stopsTo,
    duration: durationTo,
  } = segmentTo;

  const {
    origin: originFrom,
    destination: destinationFrom,
    date: dateFrom,
    stops: stopsFrom,
    duration: durationFrom,
  } = segmentFrom;

  const getFormatTransfersNum = (stopsNumber) =>
    stopsNumber === 0
      ? 'Прямой рейс'
      : stopsNumber === 1
        ? '1 пересадка'
        : `${stopsNumber} пересадки`;

  const getFormatTravelDuration = (travelDurationInMinutes) => {
    const hoursDuration = Math.floor(travelDurationInMinutes / 60)
      .toString()
      .padStart(2, '0');
    const minutesDuration = (travelDurationInMinutes - hoursDuration * 60)
      .toString()
      .padStart(2, '0');

    return `${hoursDuration}ч ${minutesDuration}м`;
  };

  const getFormatStartEndTime = (dateObj, travelDuration) => {
    const hoursStart = new Date(dateObj).getHours().toString().padStart(2, '0');
    const minutesStart = new Date(dateObj).getMinutes().toString().padStart(2, '0');
    const dateObjEnd = addMinutes(dateObj, travelDuration);
    const hoursEnd = new Date(dateObjEnd).getHours().toString().padStart(2, '0');
    const minutesEnd = new Date(dateObjEnd).getMinutes().toString().padStart(2, '0');

    return `${hoursStart}:${minutesStart} – ${hoursEnd}:${minutesEnd}`;
  };

  return (
    <li className={classes['ticket-card']}>
      {/* ШАПКА билета (цена + лого) */}
      <div className={classes['ticket-card__header']}>
        <span className={classes['ticket-card__price']}>
          {price.toLocaleString('ru-RU')} &#8381;
        </span>
        <div className={classes['ticket-card__img-wrapper']}>
          <img
            src={`https://pics.avs.io/110/36/${carrier}.png`}
            className={classes['ticket-card__img']}
            alt="Air carrier logo"
          />
        </div>
      </div>

      {/* сегмент "ТУДА" */}
      <div className={classes['ticket-card__flight-option']}>
        <div className={classes['ticket-card__flight-option-col-container']}>
          <span className={classes['ticket-card__flight-option-header']}>
            {originTo} - {destinationTo}
          </span>
          <span className={classes['ticket-card__flight-option-text']}>
            {getFormatStartEndTime(dateTo, durationTo)}
          </span>
        </div>
        <div className={classes['ticket-card__flight-option-col-container']}>
          <span className={classes['ticket-card__flight-option-header']}>В пути</span>
          <span className={classes['ticket-card__flight-option-text']}>
            {getFormatTravelDuration(durationTo)}
          </span>
        </div>
        <div className={classes['ticket-card__flight-option-col-container']}>
          <span className={classes['ticket-card__flight-option-header']}>
            {getFormatTransfersNum(stopsTo.length)}
          </span>
          <span className={classes['ticket-card__flight-option-text']}>{stopsTo.join(', ')}</span>
        </div>
      </div>

      {/* сегмент "ОБРАТНО" */}
      <div className={classes['ticket-card__flight-option']}>
        <div className={classes['ticket-card__flight-option-col-container']}>
          <span className={classes['ticket-card__flight-option-header']}>
            {originFrom} - {destinationFrom}
          </span>
          <span className={classes['ticket-card__flight-option-text']}>
            {getFormatStartEndTime(dateFrom, durationFrom)}
          </span>
        </div>
        <div className={classes['ticket-card__flight-option-col-container']}>
          <span className={classes['ticket-card__flight-option-header']}>В пути</span>
          <span className={classes['ticket-card__flight-option-text']}>
            {getFormatTravelDuration(durationFrom)}
          </span>
        </div>
        <div className={classes['ticket-card__flight-option-col-container']}>
          <span className={classes['ticket-card__flight-option-header']}>
            {getFormatTransfersNum(stopsFrom.length)}
          </span>
          <span className={classes['ticket-card__flight-option-text']}>{stopsFrom.join(', ')}</span>
        </div>
      </div>
    </li>
  );
}

TicketCard.propTypes = {
  price: PropTypes.number.isRequired,
  carrier: PropTypes.string.isRequired,
  segmentTo: PropTypes.shape({
    origin: PropTypes.string,
    destination: PropTypes.string,
    date: PropTypes.string,
    stops: PropTypes.arrayOf(PropTypes.string),
    duration: PropTypes.number,
  }).isRequired,
  segmentFrom: PropTypes.shape({
    origin: PropTypes.string,
    destination: PropTypes.string,
    date: PropTypes.string,
    stops: PropTypes.arrayOf(PropTypes.string),
    duration: PropTypes.number,
  }).isRequired,
};

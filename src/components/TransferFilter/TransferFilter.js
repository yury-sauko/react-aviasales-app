import { useState } from 'react';
import classes from './TransferFilter.module.scss';

export default function TransferFilter() {
  const [chkBoxStatus, setChkBoxStatus] = useState({
    chkBoxStAll: false,
    chkBoxSt0Tr: false,
    chkBoxSt1Tr: false,
    chkBoxSt2Tr: false,
    chkBoxSt3Tr: false,
  });

  const handleInputEvent = (e) => {
    const chkBoxTarget = e.target.name;

    setChkBoxStatus((prevState) => ({
      ...prevState,
      [chkBoxTarget]: !prevState[chkBoxTarget],
    }));
  };

  return (
    <ul className={classes['transfer-filter']}>
      <li className={classes['transfer-filter__header']}>Количество пересадок</li>
      <li className={classes['transfer-filter__input-wrapper']}>
        <label htmlFor="all_transfers_input" className={classes['transfer-filter__label']}>
          <input
            type="checkbox"
            id="all_transfers_input"
            name="chkBoxStAll"
            className={classes['transfer-filter__input']}
            checked={chkBoxStatus.chkBoxStAll}
            onChange={handleInputEvent}
          />
          <span className={classes['transfer-filter__label-text']}>Все</span>
        </label>
      </li>
      <li className={classes['transfer-filter__input-wrapper']}>
        <label htmlFor="zero_transfers_input" className={classes['transfer-filter__label']}>
          <input
            type="checkbox"
            id="zero_transfers_input"
            name="chkBoxSt0Tr"
            className={classes['transfer-filter__input']}
            checked={chkBoxStatus.chkBoxSt0Tr}
            onChange={handleInputEvent}
          />
          <span className={classes['transfer-filter__label-text']}>Без пересадок</span>
        </label>
      </li>
      <li className={classes['transfer-filter__input-wrapper']}>
        <label htmlFor="one_transfers_input" className={classes['transfer-filter__label']}>
          <input
            type="checkbox"
            id="one_transfers_input"
            name="chkBoxSt1Tr"
            className={classes['transfer-filter__input']}
            checked={chkBoxStatus.chkBoxSt1Tr}
            onChange={handleInputEvent}
          />
          <span className={classes['transfer-filter__label-text']}>1 пересадка</span>
        </label>
      </li>
      <li className={classes['transfer-filter__input-wrapper']}>
        <label htmlFor="two_transfers_input" className={classes['transfer-filter__label']}>
          <input
            type="checkbox"
            id="two_transfers_input"
            name="chkBoxSt2Tr"
            className={classes['transfer-filter__input']}
            checked={chkBoxStatus.chkBoxSt2Tr}
            onChange={handleInputEvent}
          />
          <span className={classes['transfer-filter__label-text']}>2 пересадки</span>
        </label>
      </li>
      <li className={classes['transfer-filter__input-wrapper']}>
        <label htmlFor="three_transfers_input" className={classes['transfer-filter__label']}>
          <input
            type="checkbox"
            id="three_transfers_input"
            name="chkBoxSt3Tr"
            className={classes['transfer-filter__input']}
            checked={chkBoxStatus.chkBoxSt3Tr}
            onChange={handleInputEvent}
          />
          <span className={classes['transfer-filter__label-text']}>3 пересадки</span>
        </label>
      </li>
    </ul>
  );
}

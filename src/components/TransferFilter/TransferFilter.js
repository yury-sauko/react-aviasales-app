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
    const chkBoxTarget = e.target.getAttribute('aria-label');
    if (e.button === 0 || e.key === ' ') {
      setChkBoxStatus((prevState) => ({
        ...prevState,
        [chkBoxTarget]: !prevState[chkBoxTarget],
      }));
    }
  };

  return (
    <div className={classes['transfer-filter']}>
      <div className={classes['transfer-filter__header']}>Количество пересадок</div>
      <div className={classes['transfer-filter__input-wrapper']}>
        <label htmlFor="all_transfers_input" className={classes['transfer-filter__label']}>
          <input className={classes['transfer-filter__default-input']} id="all_transfers_input" />
          <span
            className={classes['transfer-filter__custom-input']}
            role="checkbox"
            aria-checked={chkBoxStatus.chkBoxStAll}
            aria-labelledby="all_transfers_input"
            aria-label="chkBoxStAll"
            tabIndex="0"
            onClick={handleInputEvent}
            onKeyDown={handleInputEvent}
          />
          <span className={classes['transfer-filter__label-text']}>Все</span>
        </label>
      </div>
      <div className={classes['transfer-filter__input-wrapper']}>
        <label htmlFor="zero_transfers_input" className={classes['transfer-filter__label']}>
          <input className={classes['transfer-filter__default-input']} id="zero_transfers_input" />
          <span
            className={classes['transfer-filter__custom-input']}
            role="checkbox"
            aria-checked={chkBoxStatus.chkBoxSt0Tr}
            aria-labelledby="zero_transfers_input"
            aria-label="chkBoxSt0Tr"
            tabIndex="0"
            onClick={handleInputEvent}
            onKeyDown={handleInputEvent}
          />
          <span className={classes['transfer-filter__label-text']}>Без пересадок</span>
        </label>
      </div>
      <div className={classes['transfer-filter__input-wrapper']}>
        <label htmlFor="one_transfers_input" className={classes['transfer-filter__label']}>
          <input className={classes['transfer-filter__default-input']} id="one_transfers_input" />
          <span
            className={classes['transfer-filter__custom-input']}
            role="checkbox"
            aria-checked={chkBoxStatus.chkBoxSt1Tr}
            aria-labelledby="one_transfers_input"
            aria-label="chkBoxSt1Tr"
            tabIndex="0"
            onClick={handleInputEvent}
            onKeyDown={handleInputEvent}
          />
          <span className={classes['transfer-filter__label-text']}>1 пересадка</span>
        </label>
      </div>
      <div className={classes['transfer-filter__input-wrapper']}>
        <label htmlFor="two_transfers_input" className={classes['transfer-filter__label']}>
          <input className={classes['transfer-filter__default-input']} id="two_transfers_input" />
          <span
            className={classes['transfer-filter__custom-input']}
            role="checkbox"
            aria-checked={chkBoxStatus.chkBoxSt2Tr}
            aria-labelledby="two_transfers_input"
            aria-label="chkBoxSt2Tr"
            tabIndex="0"
            onClick={handleInputEvent}
            onKeyDown={handleInputEvent}
          />
          <span className={classes['transfer-filter__label-text']}>2 пересадки</span>
        </label>
      </div>
      <div className={classes['transfer-filter__input-wrapper']}>
        <label htmlFor="three_transfers_input" className={classes['transfer-filter__label']}>
          <input className={classes['transfer-filter__default-input']} id="three_transfers_input" />
          <span
            className={classes['transfer-filter__custom-input']}
            role="checkbox"
            aria-checked={chkBoxStatus.chkBoxSt3Tr}
            aria-labelledby="three_transfers_input"
            aria-label="chkBoxSt3Tr"
            tabIndex="0"
            onClick={handleInputEvent}
            onKeyDown={handleInputEvent}
          />
          <span className={classes['transfer-filter__label-text']}>3 пересадки</span>
        </label>
      </div>
    </div>
  );
}

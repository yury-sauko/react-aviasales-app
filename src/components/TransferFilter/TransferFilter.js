import classes from './TransferFilter.module.scss';

export default function TransferFilter() {
  return (
    <div className={classes['transfer-filter']}>
      <div className={classes['transfer-filter__header']}>Количество пересадок</div>
      <div className={classes['transfer-filter__input-wrapper']}>
        <label htmlFor="allTransfersInput" className={classes['transfer-filter__label']}>
          <input
            type="checkbox"
            className={classes['transfer-filter__default-input']}
            name="input-all"
            id="allTransfersInput"
          />
          <span className={classes['transfer-filter__custom-input']} />
          <span className={classes['transfer-filter__label-text']}>Все</span>
        </label>
      </div>
      <div className={classes['transfer-filter__input-wrapper']}>
        <label htmlFor="zeroTransfersInput" className={classes['transfer-filter__label']}>
          <input
            type="checkbox"
            className={classes['transfer-filter__default-input']}
            name="input-0-trans"
            id="zeroTransfersInput"
          />
          <span className={classes['transfer-filter__custom-input']} />
          <span className={classes['transfer-filter__label-text']}>Без пересадок</span>
        </label>
      </div>
      <div className={classes['transfer-filter__input-wrapper']}>
        <label htmlFor="oneTransfersInput" className={classes['transfer-filter__label']}>
          <input
            type="checkbox"
            className={classes['transfer-filter__default-input']}
            name="input-1-trans"
            id="oneTransfersInput"
          />
          <span className={classes['transfer-filter__custom-input']} />
          <span className={classes['transfer-filter__label-text']}>1 пересадка</span>
        </label>
      </div>
      <div className={classes['transfer-filter__input-wrapper']}>
        <label htmlFor="twoTransfersInput" className={classes['transfer-filter__label']}>
          <input
            type="checkbox"
            className={classes['transfer-filter__default-input']}
            name="input-2-trans"
            id="twoTransfersInput"
          />
          <span className={classes['transfer-filter__custom-input']} />
          <span className={classes['transfer-filter__label-text']}>2 пересадки</span>
        </label>
      </div>
      <div className={classes['transfer-filter__input-wrapper']}>
        <label htmlFor="threeTransfersInput" className={classes['transfer-filter__label']}>
          <input
            type="checkbox"
            className={classes['transfer-filter__default-input']}
            name="input-3-trans"
            id="threeTransfersInput"
          />
          <span className={classes['transfer-filter__custom-input']} />
          <span className={classes['transfer-filter__label-text']}>3 пересадки</span>
        </label>
      </div>
    </div>
  );
}

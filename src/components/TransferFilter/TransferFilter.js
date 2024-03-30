import classes from './TransferFilter.module.scss';

export default function TransferFilter() {
  return (
    <div className={classes['transfer-filter']}>
      <div className={classes['transfer-filter__header']}>Количество пересадок</div>
      <div className={classes['transfer-filter__all']}>
        <label htmlFor="allTransfersInput">
          <input
            type="checkbox"
            className={classes['transfer-filter__input']}
            name="input-all"
            id="allTransfersInput"
          />
          Все
        </label>
      </div>
      <div className={classes['transfer-filter__0-transfer']}>
        <label htmlFor="zeroTransfersInput">
          <input
            type="checkbox"
            className={classes['transfer-filter__input']}
            name="input-0-trans"
            id="zeroTransfersInput"
          />
          Без пересадок
        </label>
      </div>
      <div className={classes['transfer-filter__1-transfer']}>
        <label htmlFor="oneTransfersInput">
          <input
            type="checkbox"
            className={classes['transfer-filter__input']}
            name="input-1-trans"
            id="oneTransfersInput"
          />
          1 пересадка
        </label>
      </div>
      <div className={classes['transfer-filter__2-transfers']}>
        <label htmlFor="twoTransfersInput">
          <input
            type="checkbox"
            className={classes['transfer-filter__input']}
            name="input-2-trans"
            id="twoTransfersInput"
          />
          2 пересадки
        </label>
      </div>
      <div className={classes['transfer-filter__3-transfers']}>
        <label htmlFor="threeTransfersInput">
          <input
            type="checkbox"
            className={classes['transfer-filter__input']}
            name="input-3-trans"
            id="threeTransfersInput"
          />
          3 пересадки
        </label>
      </div>
    </div>
  );
}

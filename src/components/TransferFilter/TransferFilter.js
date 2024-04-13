import { useSelector, useDispatch } from 'react-redux';
import {
  changeInputAllTr,
  changeInput0Tr,
  changeInput1Tr,
  changeInput2Tr,
  changeInput3Tr,
} from '../../store/transferFilter.slice';

import classes from './TransferFilter.module.scss';

export default function TransferFilter() {
  const { isChkdInputAll, isChkdInput0Tr, isChkdInput1Tr, isChkdInput2Tr, isChkdInput3Tr } =
    useSelector((state) => state.transferFilter);

  const dispatch = useDispatch();

  return (
    <ul className={classes['transfer-filter']}>
      <li className={classes['transfer-filter__header']}>Количество пересадок</li>
      <li className={classes['transfer-filter__input-wrapper']}>
        <label htmlFor="all_transfers_input" className={classes['transfer-filter__label']}>
          <input
            type="checkbox"
            id="all_transfers_input"
            className={classes['transfer-filter__input']}
            checked={isChkdInputAll}
            onChange={() => dispatch(changeInputAllTr())}
          />
          <span className={classes['transfer-filter__label-text']}>Все</span>
        </label>
      </li>
      <li className={classes['transfer-filter__input-wrapper']}>
        <label htmlFor="zero_transfers_input" className={classes['transfer-filter__label']}>
          <input
            type="checkbox"
            id="zero_transfers_input"
            className={classes['transfer-filter__input']}
            checked={isChkdInput0Tr}
            onChange={() => dispatch(changeInput0Tr())}
          />
          <span className={classes['transfer-filter__label-text']}>Без пересадок</span>
        </label>
      </li>
      <li className={classes['transfer-filter__input-wrapper']}>
        <label htmlFor="one_transfers_input" className={classes['transfer-filter__label']}>
          <input
            type="checkbox"
            id="one_transfers_input"
            className={classes['transfer-filter__input']}
            checked={isChkdInput1Tr}
            onChange={() => dispatch(changeInput1Tr())}
          />
          <span className={classes['transfer-filter__label-text']}>1 пересадка</span>
        </label>
      </li>
      <li className={classes['transfer-filter__input-wrapper']}>
        <label htmlFor="two_transfers_input" className={classes['transfer-filter__label']}>
          <input
            type="checkbox"
            id="two_transfers_input"
            className={classes['transfer-filter__input']}
            checked={isChkdInput2Tr}
            onChange={() => dispatch(changeInput2Tr())}
          />
          <span className={classes['transfer-filter__label-text']}>2 пересадки</span>
        </label>
      </li>
      <li className={classes['transfer-filter__input-wrapper']}>
        <label htmlFor="three_transfers_input" className={classes['transfer-filter__label']}>
          <input
            type="checkbox"
            id="three_transfers_input"
            className={classes['transfer-filter__input']}
            checked={isChkdInput3Tr}
            onChange={() => dispatch(changeInput3Tr())}
          />
          <span className={classes['transfer-filter__label-text']}>3 пересадки</span>
        </label>
      </li>
    </ul>
  );
}

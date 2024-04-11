import { useSelector, useDispatch } from 'react-redux'; // хуки для работы с redux
import {
  changeInputAll,
  changeInput0Tr,
  changeInput1Tr,
  changeInput2Tr,
  changeInput3Tr,
} from '../../store/transferFilter.slice'; // импортируем редьюсеры
import classes from './TransferFilter.module.scss';

export default function TransferFilter() {
  // Вытаскиваем данные из хранилища. Здесь state — это все состояние приложения
  const { isChkdInputAll, isChkdInput0Tr, isChkdInput1Tr, isChkdInput2Tr, isChkdInput3Tr } =
    useSelector((state) => state.transferFilter);

  // Возвращаем метод store.dispatch() текущего хранилища
  const dispatch = useDispatch();

  return (
    <ul className={classes['transfer-filter']}>
      <li className={classes['transfer-filter__header']}>Количество пересадок</li>
      <li className={classes['transfer-filter__input-wrapper']}>
        <label htmlFor="all_transfers_input" className={classes['transfer-filter__label']}>
          <input
            type="checkbox"
            id="all_transfers_input"
            // name="inputAll"
            className={classes['transfer-filter__input']}
            checked={isChkdInputAll}
            onChange={() => dispatch(changeInputAll())}
          />
          <span className={classes['transfer-filter__label-text']}>Все</span>
        </label>
      </li>
      <li className={classes['transfer-filter__input-wrapper']}>
        <label htmlFor="zero_transfers_input" className={classes['transfer-filter__label']}>
          <input
            type="checkbox"
            id="zero_transfers_input"
            // name="input0Tr"
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
            // name="input1Tr"
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
            // name="input2Tr"
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
            // name="input3Tr"
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

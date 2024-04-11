import { useDispatch, useSelector } from 'react-redux'; // хуки для работы с redux
import {
  changeFocusCheapestBtn,
  changeFocusFastestBtn,
  changeFocusOptimalBtn,
} from '../../store/costFilter.slice'; // импортируем редьюсеры
import classes from './CostFilter.module.scss';

export default function CostFilter() {
  // Вытаскиваем данные из хранилища. Здесь state — это все состояние приложения
  const { isFocusCheapestBtn, isFocusFastestBtn, isFocusOptimalBtn } = useSelector(
    (state) => state.costFilter,
  );

  // Возвращаем метод store.dispatch() текущего хранилища
  const dispatch = useDispatch();

  const btnCheapestClass = [
    classes['cost-filter__item'],
    isFocusCheapestBtn ? classes['cost-filter__item--active'] : '',
  ].join(' ');

  const btnFastestClass = [
    classes['cost-filter__item'],
    isFocusFastestBtn ? classes['cost-filter__item--active'] : '',
  ].join(' ');

  const btnOptimalClass = [
    classes['cost-filter__item'],
    isFocusOptimalBtn ? classes['cost-filter__item--active'] : '',
  ].join(' ');

  return (
    <div className={classes['cost-filter']}>
      <button
        type="button"
        // value="cheapest_ticket_btn"
        onClick={() => dispatch(changeFocusCheapestBtn())}
        className={btnCheapestClass}
      >
        Самый дешевый
      </button>
      <button
        type="button"
        // value="fastest_ticket_btn"
        onClick={() => dispatch(changeFocusFastestBtn())}
        className={btnFastestClass}
      >
        Самый быстрый
      </button>
      <button
        type="button"
        // value="optimal_ticket_btn"
        onClick={() => dispatch(changeFocusOptimalBtn())}
        className={btnOptimalClass}
      >
        Оптимальный
      </button>
    </div>
  );
}

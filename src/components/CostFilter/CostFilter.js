import { useDispatch } from 'react-redux'; // хуки для работы с redux
import {
  changeFocusCheapestBtn,
  changeFocusFastestBtn,
  changeFocusOptimalBtn,
} from '../../slices/costFilter.slice'; // импортируем редьюсеры
import classes from './CostFilter.module.scss';

export default function CostFilter() {
  // Вытаскиваем данные из хранилища. Здесь state — это все состояние приложения
  // const { isFocusCheapestBtn, isFocusFastestBtn, isFocusOptimalBtn } = useSelector(
  //   (state) => state.costFilter,
  // );

  // Возвращаем метод store.dispatch() текущего хранилища
  const dispatch = useDispatch();

  return (
    <div className={classes['cost-filter']}>
      <button
        type="button"
        // value="cheapest_ticket_btn"
        onFocus={() => dispatch(changeFocusCheapestBtn())}
        onBlur={() => dispatch(changeFocusCheapestBtn())}
        className={classes['cost-filter__item']}
      >
        Самый дешевый
      </button>
      <button
        type="button"
        // value="fastest_ticket_btn"
        onFocus={() => dispatch(changeFocusFastestBtn())}
        onBlur={() => dispatch(changeFocusFastestBtn())}
        className={classes['cost-filter__item']}
      >
        Самый быстрый
      </button>
      <button
        type="button"
        // value="optimal_ticket_btn"
        onFocus={() => dispatch(changeFocusOptimalBtn())}
        onBlur={() => dispatch(changeFocusOptimalBtn())}
        className={classes['cost-filter__item']}
      >
        Оптимальный
      </button>
    </div>
  );
}

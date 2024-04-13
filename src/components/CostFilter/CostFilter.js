import { useDispatch, useSelector } from 'react-redux';
import {
  changeFocusCheapestBtn,
  changeFocusFastestBtn,
  changeFocusOptimalBtn,
} from '../../store/costFilter.slice';

import classes from './CostFilter.module.scss';

export default function CostFilter() {
  const { isFocusCheapestBtn, isFocusFastestBtn, isFocusOptimalBtn } = useSelector(
    (state) => state.costFilter,
  );

  const dispatch = useDispatch();

  const btnCheapestClass = [
    classes['cost-filter__item'],
    isFocusCheapestBtn ? classes['cost-filter__item--active'] : '',
  ]
    .join(' ')
    .trim();

  const btnFastestClass = [
    classes['cost-filter__item'],
    isFocusFastestBtn ? classes['cost-filter__item--active'] : '',
  ]
    .join(' ')
    .trim();

  const btnOptimalClass = [
    classes['cost-filter__item'],
    isFocusOptimalBtn ? classes['cost-filter__item--active'] : '',
  ]
    .join(' ')
    .trim();

  return (
    <div className={classes['cost-filter']}>
      <button
        type="button"
        onClick={() => dispatch(changeFocusCheapestBtn())}
        className={btnCheapestClass}
      >
        Самый дешевый
      </button>
      <button
        type="button"
        onClick={() => dispatch(changeFocusFastestBtn())}
        className={btnFastestClass}
      >
        Самый быстрый
      </button>
      <button
        type="button"
        onClick={() => dispatch(changeFocusOptimalBtn())}
        className={btnOptimalClass}
      >
        Оптимальный
      </button>
    </div>
  );
}

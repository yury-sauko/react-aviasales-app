import classes from './CostFilter.module.scss';

export default function CostFilter() {
  return (
    <div className={classes['cost-filter']}>
      <button type="button" className={classes['cost-filter__item']}>
        Самый дешевый
      </button>
      <button type="button" className={classes['cost-filter__item']}>
        Самый быстрый
      </button>
      <button type="button" className={classes['cost-filter__item']}>
        Оптимальный
      </button>
    </div>
  );
}

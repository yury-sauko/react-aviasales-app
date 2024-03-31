import classes from './CostFilter.module.scss';

export default function CostFilter() {
  return (
    <div className={classes['cost-filter']}>
      {/* Может button вместо span? */}
      <button type="button" className={classes['cost-filter__item']}>
        Самый дешевый
      </button>
      <span className={classes['cost-filter__item']}>Самый быстрый</span>
      <span className={classes['cost-filter__item']}>Оптимальный</span>
    </div>
  );
}

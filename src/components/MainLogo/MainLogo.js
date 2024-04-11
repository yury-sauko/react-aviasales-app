import classes from './MainLogo.module.scss';
import mainLogo from '../../assets/img/main-logo.svg';

export default function MainLogo() {
  return (
    <div className={classes['main-logo-container']}>
      <img src={mainLogo} className={classes['main-logo-img']} alt="Main logo" />
    </div>
  );
}

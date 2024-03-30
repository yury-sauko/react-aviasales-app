import classes from './MainLogo.module.scss';
import mainLogo from '../../img/main-logo.svg';

export default function MainLogo() {
  return (
    <div className={classes['main-logo']}>
      <img src={mainLogo} alt="Main logo" />
    </div>
  );
}

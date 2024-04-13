import { Spin } from 'antd';

import classes from './Spinner.module.scss';

export default function Spinner() {
  return <Spin className={classes.spinner} />;
}

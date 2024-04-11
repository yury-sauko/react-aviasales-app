import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FloatButton, ConfigProvider } from 'antd';
import fetchSearchId from '../../middlewares/fetchSearchId';
import fetchPackOfTickets from '../../middlewares/fetchPackOfTickets';
import MainLogo from '../MainLogo/MainLogo';
import TransferFilter from '../TransferFilter/TransferFilter';
import CostFilter from '../CostFilter/CostFilter';
import TicketsList from '../TicketsList/TicketsList';
import classes from './App.module.scss';

export default function App() {
  const { searchIdValue } = useSelector((state) => state.searchId);
  const { isGettingFinished, successFetchCount, errorFetchCount } = useSelector(
    (state) => state.tickets,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearchId());
  }, [dispatch]);

  useEffect(() => {
    if (searchIdValue && !isGettingFinished) {
      dispatch(fetchPackOfTickets(searchIdValue));
    }
  }, [dispatch, isGettingFinished, searchIdValue, successFetchCount, errorFetchCount]);

  return (
    <div className={classes.app}>
      <MainLogo />
      <TransferFilter />
      <CostFilter />
      <TicketsList />
      <ConfigProvider
        theme={{
          token: {
            marginXXL: 70,
          },
        }}
      >
        <FloatButton.BackTop visibilityHeight={400} shape="square" />
      </ConfigProvider>
    </div>
  );
}

import { FloatButton, ConfigProvider } from 'antd';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addSortedTicketsArr } from '../../store/tickets.slice';
import fetchSearchId from '../../middlewares/fetchSearchId';
import fetchPackOfTickets from '../../middlewares/fetchPackOfTickets';
import useSortedTicketsArr from '../../hooks/useSortedTicketsArr';

import MainLogo from '../MainLogo/MainLogo';
import Spinner from '../Spinner/Spinner';
import TransferFilter from '../TransferFilter/TransferFilter';
import CostFilter from '../CostFilter/CostFilter';
import TicketsContainer from '../TicketsContainer/TicketsContainer';

import classes from './app.module.scss';

export default function App() {
  const { searchIdValue } = useSelector((state) => state.searchId);
  const { ticketsArr, isGettingFinished, successFetchCount, errorFetchCount } = useSelector(
    (state) => state.tickets,
  );
  const { isChkdInputAll, isChkdInput0Tr, isChkdInput1Tr, isChkdInput2Tr, isChkdInput3Tr } =
    useSelector((state) => state.transferFilter);
  const { isFocusCheapestBtn, isFocusFastestBtn, isFocusOptimalBtn } = useSelector(
    (state) => state.costFilter,
  );

  const dispatch = useDispatch();

  const sortedTicketsArr = useSortedTicketsArr();

  useEffect(() => {
    dispatch(fetchSearchId());
  }, [dispatch]);

  useEffect(() => {
    if (searchIdValue && !isGettingFinished) {
      dispatch(fetchPackOfTickets(searchIdValue));
    }
  }, [dispatch, isGettingFinished, searchIdValue, successFetchCount, errorFetchCount]);

  useEffect(() => {
    dispatch(addSortedTicketsArr(sortedTicketsArr));
  }, [
    dispatch,
    ticketsArr,
    isChkdInputAll,
    isChkdInput0Tr,
    isChkdInput1Tr,
    isChkdInput2Tr,
    isChkdInput3Tr,
    isFocusCheapestBtn,
    isFocusFastestBtn,
    isFocusOptimalBtn,
  ]);

  return (
    <div className={classes.app}>
      <MainLogo />
      {!isGettingFinished ? <Spinner /> : null}
      <TransferFilter />
      <CostFilter />
      <TicketsContainer />
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

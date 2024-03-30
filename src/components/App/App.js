import MainLogo from '../MainLogo/MainLogo';
import TransferFilter from '../TransferFilter/TransferFilter';
// import CostFilter from '../CostFilter/CostFilter';
// import TicketsList from '../TicketsList/TicketsList';
// import ShowTicketsBtn from '../ShowTicketsBtn/ShowTicketsBtn';
import classes from './App.module.scss';

export default function App() {
  return (
    <div className={classes.app}>
      <MainLogo />
      <TransferFilter />
      {/* <CostFilter />
      <TicketsList />
      <ShowTicketsBtn /> */}
    </div>
  );
}

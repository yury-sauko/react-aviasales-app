import { configureStore } from '@reduxjs/toolkit';
import transferFilterReducer from './transferFilter.slice';
import costFilterReducer from './costFilter.slice';
import searchIdReducer from './searchId.slice';
import ticketsReducer from './tickets.slice';

export default configureStore({
  reducer: {
    /** Свойство transferFilter будет внутри
     * объекта общего состояния: state.transferFilter, и т.д.
     * */
    transferFilter: transferFilterReducer,
    costFilter: costFilterReducer,
    searchId: searchIdReducer,
    tickets: ticketsReducer,
  },
});

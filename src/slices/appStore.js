import { configureStore } from '@reduxjs/toolkit';
import transferFilterReducer from './transferFilter.slice';
import costFilterReducer from './costFilter.slice';

// настроим и экспортируем Store
export default configureStore({
  reducer: {
    // Свойство transferFilter будет внутри
    // объекта общего состояния: state.transferFilter, и т.д.
    transferFilter: transferFilterReducer,
    costFilter: costFilterReducer,
  },
});

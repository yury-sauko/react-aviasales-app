import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isFocusCheapestBtn: false,
  isFocusFastestBtn: true,
  isFocusOptimalBtn: false,
};

const costFilterSlice = createSlice({
  name: 'costFilter',
  initialState,

  reducers: {
    /** здесь state можно мутировать, так как в createSlice и createReducer
     * "под капотом" работает библиотека Immer для обеспечения иммутабельности.
     * Добавил переопределение правила в .eslintrc.json (см. "overrides")
     * */
    changeFocusCheapestBtn: (state) => {
      state.isFocusCheapestBtn = true;
      state.isFocusFastestBtn = false;
      state.isFocusOptimalBtn = false;
    },
    changeFocusFastestBtn: (state) => {
      state.isFocusCheapestBtn = false;
      state.isFocusFastestBtn = true;
      state.isFocusOptimalBtn = false;
    },
    changeFocusOptimalBtn: (state) => {
      state.isFocusCheapestBtn = false;
      state.isFocusFastestBtn = false;
      state.isFocusOptimalBtn = true;
    },
  },
});

/** Слайс генерирует экшены, которые экспортируются отдельно.
 * Экшены генерируются автоматически из имен ключей объекта reducers в createSlice
 * */
export const { changeFocusCheapestBtn, changeFocusFastestBtn, changeFocusOptimalBtn } =
  costFilterSlice.actions;

/** По умолчанию экспортируется редьюсер, сгенерированный слайсом. Экспортируется
 * по умолчанию просто для удобства, чтобы разграничить экспорт экшенов и редьюсера
 * */
export default costFilterSlice.reducer;

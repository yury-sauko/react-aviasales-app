import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isFocusCheapestBtn: false,
  isFocusFastestBtn: false,
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
      state.isFocusCheapestBtn = !state.isFocusCheapestBtn;
    },
    changeFocusFastestBtn: (state) => {
      state.isFocusFastestBtn = !state.isFocusFastestBtn;
    },
    changeFocusOptimalBtn: (state) => {
      state.isFocusOptimalBtn = !state.isFocusOptimalBtn;
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

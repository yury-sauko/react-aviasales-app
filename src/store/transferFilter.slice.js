import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isChkdInputAll: false,
  isChkdInput0Tr: false,
  isChkdInput1Tr: false,
  isChkdInput2Tr: false,
  isChkdInput3Tr: false,
};

/**
 * Убрать из редьюсеров логику проверки чекбокса "Все",
 * использовать для этого мидлвару???
 */

// Вспомогательная функция для изменения чекбоксов по клику на "Все"
const changeAllInputs = (state) =>
  Object.fromEntries(
    Object.entries(state).map(([inputKey]) => {
      if (state.isChkdInputAll) {
        return [inputKey, false];
      }

      return [inputKey, true];
    }),
  );

/** Вспомогательная функция для проверки статуса чекбокса "Все"
 * и его изменения при необходимости
 * */
const checkTruthyInputAll = (someInput, inputAll) => {
  if (!someInput && inputAll) {
    return !inputAll;
  }
  return inputAll;
};

/** Вспомогательная функция для проверки статуса чекбоксов,
 * кроме текущего в редьюсере и чекбокса "Все"
 * */
const checkOtherInputsState = (currentInputKeyString, state) => {
  const tempState = { ...state };
  delete tempState[currentInputKeyString];
  delete tempState.isChkdInputAll;

  if (Object.values(tempState).filter((el) => el === true).length === 3) {
    return true;
  }

  return false;
};

/** Центральная функция для проверки чекбокса "Все".
 * В зависимости от статуса текущего чекбокса в редьюсере
 * присваивает значение чекбоксу "Все" по результату вспомогательных функций
 * */
const checkStatusInputAll = (currentInputKeyString, state) => {
  const inputAllStatus = state[currentInputKeyString]
    ? checkOtherInputsState(currentInputKeyString, state)
    : checkTruthyInputAll(state[currentInputKeyString], state.isChkdInputAll);

  return inputAllStatus;
};

const transferFilterSlice = createSlice({
  name: 'transferFilter',
  initialState,

  reducers: {
    /** Здесь state можно мутировать (в том числе во внешних функциях,
     * которые потом используются здесь), так как в createSlice и createReducer
     * "под капотом" работает библиотека Immer для обеспечения иммутабельности.
     * Добавил переопределение правила в .eslintrc.json (см. "overrides")
     * */
    changeInputAll: (state) => changeAllInputs(state),
    changeInput0Tr: (state) => {
      state.isChkdInput0Tr = !state.isChkdInput0Tr;
      state.isChkdInputAll = checkStatusInputAll('isChkdInput0Tr', state);
    },
    changeInput1Tr: (state) => {
      state.isChkdInput1Tr = !state.isChkdInput1Tr;
      state.isChkdInputAll = checkStatusInputAll('isChkdInput1Tr', state);
    },
    changeInput2Tr: (state) => {
      state.isChkdInput2Tr = !state.isChkdInput2Tr;
      state.isChkdInputAll = checkStatusInputAll('isChkdInput2Tr', state);
    },
    changeInput3Tr: (state) => {
      state.isChkdInput3Tr = !state.isChkdInput3Tr;
      state.isChkdInputAll = checkStatusInputAll('isChkdInput3Tr', state);
    },
  },
});

/** Слайс генерирует экшены, которые экспортируются отдельно.
 * Экшены генерируются автоматически из имен ключей объекта reducers в createSlice
 * */
export const { changeInputAll, changeInput0Tr, changeInput1Tr, changeInput2Tr, changeInput3Tr } =
  transferFilterSlice.actions;

/**
 * По умолчанию экспортируется редьюсер, сгенерированный слайсом. Экспортируется
 * по умолчанию просто для удобства, чтобы разграничить экспорт экшенов и редьюсера
 */
export default transferFilterSlice.reducer;

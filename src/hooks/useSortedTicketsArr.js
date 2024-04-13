import { useSelector } from 'react-redux';

export default function useSortedTicketsArr() {
  const { isChkdInputAll, isChkdInput0Tr, isChkdInput1Tr, isChkdInput2Tr, isChkdInput3Tr } =
    useSelector((state) => state.transferFilter);
  const { isFocusCheapestBtn, isFocusFastestBtn, isFocusOptimalBtn } = useSelector(
    (state) => state.costFilter,
  );
  const { ticketsArr } = useSelector((state) => state.tickets);

  const getFilteredArrOneOption = (arrForFiltering, option) =>
    arrForFiltering.filter(
      (el) => el.segments[0].stops.length === +option && el.segments[1].stops.length === +option,
    );
  const getFilteredArrTwoOptions = (arrForFiltering, firstOpt, secOpt) =>
    arrForFiltering.filter(
      (el) =>
        (el.segments[0].stops.length === +firstOpt && el.segments[1].stops.length === +firstOpt) ||
        (el.segments[0].stops.length === +secOpt && el.segments[1].stops.length === +secOpt),
    );
  const getFilteredArrThreeOptions = (arrForFiltering, firstOpt, secOpt, thirdOpt) =>
    arrForFiltering.filter(
      (el) =>
        (el.segments[0].stops.length === +firstOpt && el.segments[1].stops.length === +firstOpt) ||
        (el.segments[0].stops.length === +secOpt && el.segments[1].stops.length === +secOpt) ||
        (el.segments[0].stops.length === +thirdOpt && el.segments[1].stops.length === +thirdOpt),
    );

  let filteredByTransfersArr;
  if (isChkdInputAll) {
    filteredByTransfersArr = ticketsArr.slice();
  } else {
    const currentOptionObj = {
      0: isChkdInput0Tr && !isChkdInput1Tr && !isChkdInput2Tr && !isChkdInput3Tr,
      1: !isChkdInput0Tr && isChkdInput1Tr && !isChkdInput2Tr && !isChkdInput3Tr,
      2: !isChkdInput0Tr && !isChkdInput1Tr && isChkdInput2Tr && !isChkdInput3Tr,
      3: !isChkdInput0Tr && !isChkdInput1Tr && !isChkdInput2Tr && isChkdInput3Tr,
      '01': isChkdInput0Tr && isChkdInput1Tr && !isChkdInput2Tr && !isChkdInput3Tr,
      '02': isChkdInput0Tr && !isChkdInput1Tr && isChkdInput2Tr && !isChkdInput3Tr,
      '03': isChkdInput0Tr && !isChkdInput1Tr && !isChkdInput2Tr && isChkdInput3Tr,
      12: !isChkdInput0Tr && isChkdInput1Tr && isChkdInput2Tr && !isChkdInput3Tr,
      13: !isChkdInput0Tr && isChkdInput1Tr && !isChkdInput2Tr && isChkdInput3Tr,
      23: !isChkdInput0Tr && !isChkdInput1Tr && isChkdInput2Tr && isChkdInput3Tr,
      '012': isChkdInput0Tr && isChkdInput1Tr && isChkdInput2Tr && !isChkdInput3Tr,
      '013': isChkdInput0Tr && isChkdInput1Tr && !isChkdInput2Tr && isChkdInput3Tr,
      '023': isChkdInput0Tr && !isChkdInput1Tr && isChkdInput2Tr && isChkdInput3Tr,
      123: !isChkdInput0Tr && isChkdInput1Tr && isChkdInput2Tr && isChkdInput3Tr,
    };

    const entries = Object.entries(currentOptionObj);
    const entryIdxWithTrue = entries.findIndex((el) => el[1] === true);

    if (entryIdxWithTrue === -1) return [];

    const trueOption = entries[entryIdxWithTrue][0];

    switch (trueOption.length) {
      case 1:
        filteredByTransfersArr = getFilteredArrOneOption(ticketsArr, trueOption);
        break;
      case 2:
        filteredByTransfersArr = getFilteredArrTwoOptions(ticketsArr, ...trueOption.split(''));
        break;
      case 3:
        filteredByTransfersArr = getFilteredArrThreeOptions(ticketsArr, ...trueOption.split(''));
        break;
      default:
        console.log('Хук useSortedTicketsArr, сработал default case в switch');
    }
  }

  const sortedTicketsArr = filteredByTransfersArr.slice();
  if (isFocusFastestBtn) {
    sortedTicketsArr.sort(
      (a, b) =>
        a.segments[0].duration +
        a.segments[1].duration -
        (b.segments[0].duration + b.segments[1].duration),
    );
  }
  if (isFocusCheapestBtn) {
    sortedTicketsArr.sort((a, b) => a.price - b.price);
  }
  if (isFocusOptimalBtn) {
    sortedTicketsArr.sort(
      (a, b) =>
        a.segments[0].stops.length +
        a.segments[1].stops.length -
        (b.segments[0].stops.length + b.segments[1].stops.length),
    );
  }

  return sortedTicketsArr;
}

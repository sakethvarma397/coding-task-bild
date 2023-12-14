/* Instruments */
import type { ReduxThunkAction } from "@/lib/redux";
import {selectCount, counterSlice} from "@/lib/redux";

export const incrementIfOddAsync =
  (amount: number): ReduxThunkAction =>
  (dispatch, getState) => {
      const currentCount = selectCount(getState());
      const {incrementByAmount} = counterSlice.actions;
      // update only if currentValue is odd
      if (currentCount%2 === 1) {
          dispatch(incrementByAmount(amount))
      }
  };

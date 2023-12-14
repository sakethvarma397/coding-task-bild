/* Core */
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: CounterSliceState = {
  value: 0,
  amount: 0,
  status: "idle",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) { state.value += 1;},
    decrement(state) { state.value -= 1;},
    incrementByAmount (state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    changeAmount(state, action: PayloadAction<number>) {
      state.amount = action.payload
    },
  },
});

/* Types */
export interface CounterSliceState {
  value: number;
  amount: number;
  status: "idle" | "loading" | "failed";
}

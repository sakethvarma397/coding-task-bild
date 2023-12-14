/* Core */
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: CounterSliceState = {
  value: 0,
  status: "idle",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) { state.value += 1;},
    decrement(state) { state.value -= 1;},
  },
});

/* Types */
export interface CounterSliceState {
  value: number;
  status: "idle" | "loading" | "failed";
}

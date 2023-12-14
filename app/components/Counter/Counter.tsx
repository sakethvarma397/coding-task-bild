"use client";

/* Core */
import {ChangeEvent, useState} from "react";

/* Instruments */
import {useSelector, selectCount, useDispatch, incrementIfOddAsync, selectAmount} from "@/lib/redux";
import {counterSlice} from '@/lib/redux'
import styles from "./counter.module.css";

export const Counter = () => {
  const count = useSelector(selectCount);
  const incrementAmount = useSelector(selectAmount);
  const dispatch = useDispatch();
  const {increment, decrement, incrementByAmount, changeAmount} = counterSlice.actions;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => {
            // dispatch event to decrease count by 1
            dispatch(decrement())
          }}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => {
            // dispatch event to increment count by 1
            dispatch(increment())
          }}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
            type={"number"}
            className={styles.textbox}
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(changeAmount(Number(e.target.value)))}
        />
        <button
          className={styles.button}
          onClick={() => {
            // dispatch event to add incrementAmount to count
            dispatch(incrementByAmount(incrementAmount));
          }}
        >
          Add Amount
        </button>
        <button
          className={styles.button}
          onClick={() => {
            // dispatch event to add incrementAmount only if count is odd
            dispatch(incrementIfOddAsync(incrementAmount))
          }}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
};

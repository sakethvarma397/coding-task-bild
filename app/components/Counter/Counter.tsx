"use client";

/* Core */
import {ChangeEvent, useState} from "react";

/* Instruments */
import {useSelector, selectCount, useDispatch} from "@/lib/redux";
import {counterSlice} from '@/lib/redux'
import styles from "./counter.module.css";

export const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const {increment, decrement} = counterSlice.actions;

  // Create a state named incrementAmount

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
        <input className={styles.textbox} aria-label="Set increment amount" />
        <button
          className={styles.button}
          onClick={() => {
            // dispatch event to add incrementAmount to count
          }}
        >
          Add Amount
        </button>
        <button
          className={styles.button}
          onClick={() => {
            // dispatch event to add incrementAmount only if count is odd
          }}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
};

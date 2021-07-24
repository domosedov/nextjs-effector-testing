import { createStore, createEvent } from "effector-root";

export const $count = createStore(0);

export const increment = createEvent();
export const decrement = createEvent();
export const reset = createEvent();

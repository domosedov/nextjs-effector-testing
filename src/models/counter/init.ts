import { $count, decrement, increment, reset } from ".";

$count
  .on(decrement, (c) => c - 1)
  .on(increment, (c) => c + 1)
  .reset(reset);

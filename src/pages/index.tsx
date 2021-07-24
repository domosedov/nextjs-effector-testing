import type { FC } from "react";
import { useStore, useEvent } from "effector-react";
import { $count, decrement, increment } from "../models/counter";

export const Home: FC = () => {
  const count = useStore($count);
  const [dec, inc] = useEvent([decrement, increment]);
  return (
    <main>
      <h1>Home Page</h1>
      <h2 data-testid="count">{count}</h2>
      <button data-testid="dec" onClick={() => dec()}>
        Decrement
      </button>
      <button data-testid="inc" onClick={() => inc()}>
        Increment
      </button>
    </main>
  );
};

export default Home;

import type { FC } from "react";
import type { AppProps } from "next/app";
import { Provider } from "effector-react/ssr";
import { root } from "effector-root";
import { useScope } from "../hooks/use-scope";
import "../models/init";

const Application: FC<AppProps> = ({ Component, pageProps }) => {
  const scope = useScope(root, pageProps.initialState);
  return (
    <Provider value={scope}>
      <Component {...pageProps} />
    </Provider>
  );
};
export default Application;

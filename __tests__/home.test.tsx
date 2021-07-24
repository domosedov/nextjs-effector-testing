import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { root, fork } from "effector-root";
import { Provider } from "effector-react/ssr";
import { Home } from "../src/pages/index";

describe("Домашняя страница", () => {
  it("Есть кнопка инкремента", async () => {
    const scope = fork(root);
    render(
      <Provider value={scope}>
        <Home />
      </Provider>
    );

    userEvent.click(screen.getByTestId("inc"));
    userEvent.click(screen.getByTestId("inc"));
    userEvent.click(screen.getByTestId("inc"));

    expect(screen.getByTestId("count")).toHaveTextContent(/3/);
  });
});

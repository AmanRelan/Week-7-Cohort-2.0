import { createContext } from "react";

const defaultValue = {
  count: 0,
  setCount: () => {},
};

export const CountContext = createContext(defaultValue);

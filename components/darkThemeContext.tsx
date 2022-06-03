import React, { createContext, useReducer, useState } from "react";

const initialState = {
  darkMode: false,
};
interface ThemeContextInterface {
  state: { darkMode: boolean };
  dispatch: React.Dispatch<ACTIONTYPE>;
}

export const ThemeContext = createContext<ThemeContextInterface>(
  {} as ThemeContextInterface
);

type ACTIONTYPE = { type: "LIGHTMODE" } | { type: "DARKMODE" };

const themeReducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case "LIGHTMODE":
      return { darkMode: false };
    case "DARKMODE":
      return { darkMode: true };
    default:
      return state;
  }
};

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

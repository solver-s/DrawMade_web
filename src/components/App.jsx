import { useState, useMemo, useCallback } from "react";

import styled, { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "../styles/theme";
import { GlobalStyle } from "../styles/GlobalStyle";

import { Header } from "./ui/Header";
import { Result } from "./feature/result/Result";
import { generateTopic } from "../api/api";
import { useFetchData } from "../hooks/useFetchData";
import { loadLocalStorage } from "../utils/loadLocalStorage";
import { Sidebar } from "./feature/sidebar/Sidebar";
import { Home } from "./page/Home";
import { Outlet, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "../hooks/useAuth";

const Wrapper = styled.div`
  max-width: 50rem;
  min-width: 32rem;
  margin: 0 auto;
  padding-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const App = () => {
  const [theme, setTheme] = useState("light");
  const isShowSidebar = useLocation().pathname !== "/start";

  const handleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, [theme]);

  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
          <GlobalStyle />
          {isShowSidebar && <Sidebar onClick={handleTheme} />}
          <Wrapper>
            <Outlet />
          </Wrapper>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
};

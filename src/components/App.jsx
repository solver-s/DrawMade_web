import { useState, useMemo, useCallback } from "react";

import styled, { ThemeProvider, useTheme } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";

import { Sidebar } from "./feature/sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { AuthProvider } from "../hooks/useAuth";
import { ThemeProvider as MyThemeProvder } from "../hooks/useTheme";

const Wrapper = styled.div`
  max-width: 50rem;
  min-width: 32rem;
  margin: 0 auto;
  padding-top: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const App = () => {
  const isShowSidebar = useLocation().pathname !== "/start";

  return (
    <>
      <MyThemeProvder>
        <AuthProvider>
          <GlobalStyle />
          {isShowSidebar && <Sidebar />}
          <Wrapper>
            <Outlet />
          </Wrapper>
        </AuthProvider>
      </MyThemeProvder>
    </>
  );
};

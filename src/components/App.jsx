import { useState, useMemo, useCallback } from "react";

import styled, { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "../styles/theme";
import { GlobalStyle } from "../styles/GlobalStyle";

import { Header } from "./ui/Header";
import { Result } from "./features/result/Result";
import { generateTopic } from "../api/api";
import { useFetchData } from "../hooks/useFetchData";
import { loadLocalStorage } from "../utils/loadLocalStorage";
import { Sidebar } from "./features/sidebar/Sidebar";
import { Home } from "./features/home/Home";

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
  const [payload, setPayload] = useState(null);

  const handlePayload = (univ, depart, keywords) => {
    const newPayload = {
      school_id: loadLocalStorage("supportedUniv").filter((e) => e.name === univ)[0].id,
      department_id: loadLocalStorage("supportedDepart").filter((e) => e.name === depart)[0].id,
      keywords,
    };

    setPayload(newPayload);
  };

  const fetchResult = useCallback(() => {
    if (!payload) return Promise.resolve(null);

    return generateTopic(payload);
  }, [payload]);

  const { isLoading, result: topicResult } = useFetchData(fetchResult);

  return (
    <>
      <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
        <GlobalStyle />
        <Sidebar />
        <Wrapper>
          <Home />
          {/* <Header /> */}
          {/* <Form handlePayload={handlePayload} isLoading={isLoading} /> */}
          {/* <Result topic={topicResult} /> */}
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

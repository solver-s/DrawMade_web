import styled from "styled-components";

import { Result } from "./result/Result";
import { Button } from "../../ui/button/Button";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CurrentTopic = () => {
  const navigate = useNavigate();

  const createSession = () => {
    navigate("/session/current");
  };

  return (
    <Wrapper>
      <Result />
      <Button content={"이 주제로 세션 만들기"} onClick={createSession} />
    </Wrapper>
  );
};

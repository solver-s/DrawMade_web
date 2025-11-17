import styled from "styled-components";

import { UserDataBundle } from "./UserDataBundle";
import { IntroBundle } from "./IntroBundle";
import { GuideBox } from "./GuideBox";
import { h1_p } from "../../styled/StyledText";

const Wrapper = styled.div`
  width: 100%;
`;

const Welcome = styled(h1_p)`
  flex-direction: column-reverse;

  & > h1 {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.subColor};
  }

  & > p {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.color};
  }
`;

export const Home = () => {
  return (
    <Wrapper>
      <Welcome>
        <h1>AI 기반 입시 미술 주제 추천 서비스 DrawMade에 오신 것을 환영합니다.</h1>
        <p>안녕하세요!</p>
      </Welcome>
      <UserDataBundle />
      <IntroBundle />
      <GuideBox />
    </Wrapper>
  );
};

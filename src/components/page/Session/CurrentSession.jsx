import { styled } from "styled-components";

import { BorderBox, Bundle } from "../../styled/StyledBox";
import { h_p } from "../../styled/StyledText";

import mockData from "../../../assets/mock/mock-session.json";

const Wrapper = styled.div``;

const Header = styled(h_p)`
  gap: 0.2rem;

  & > h2 {
    font-size: 1.1rem;
  }

  & > p {
    font-size: 0.9rem;
  }
`;

const SessionBox = styled(BorderBox)``;

export const CurrentSession = () => {
  console.log(mockData);
  return (
    <Wrapper>
      <Header>
        <h2>참여 중인 세션</h2>
        <p>세션을 클릭하여 상세 정보를 확인하세요</p>
      </Header>
      <Bundle>
        {mockData.map((s) => {
          return <SessionBox key={s.id}>{s.title}</SessionBox>;
        })}
      </Bundle>
    </Wrapper>
  );
};

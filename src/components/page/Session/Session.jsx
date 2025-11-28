import { styled } from "styled-components";
import { Outlet } from "react-router-dom";

import { h_p } from "../../styled/StyledText";

import { TopBar } from "../../ui/TopBar";
import { sessionItems } from "../../router/router";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-bottom: 4rem;
`;

const Header = styled(h_p)``;

export const Session = () => {
  return (
    <Wrapper>
      <Header>
        <h1>내 세션</h1>
        <p>참여 중인 세션을 확인하고 관리할 수 있습니다</p>
      </Header>
      <TopBar items={sessionItems} />
      <Outlet />
    </Wrapper>
  );
};

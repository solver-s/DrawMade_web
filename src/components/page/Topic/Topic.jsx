import { styled } from "styled-components";
import { Outlet } from "react-router-dom";

import { h1_p } from "../../styled/StyledText";
import { TopBar } from "../../ui/TopBar";
import { topicItems } from "../../router/router";

const Header = styled(h1_p)``;

export const Topic = () => {
  return (
    <>
      <Header>
        <h1>미술 주제 생성</h1>
        <p>대학교와 학과를 선택하고 맞춤형 입시 미술 주제를 추천받으세요</p>
      </Header>
      <TopBar items={topicItems} />
      <Outlet />
    </>
  );
};

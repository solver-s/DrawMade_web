import styled from "styled-components";

import { Bundle } from "../ui/StyledBox";
import { BorderBox } from "../ui/StyledBox";

import { TopicIcon, SessionIcon } from "../../assets/IconList";

const Wrapper = styled.div`
  width: 100%;
`;

const Welcome = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 0.5rem;

  & > h1 {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.subColor};
  }

  & > p {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.color};
  }
`;

const BoxHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & > h2 {
    font-size: 1.1rem;
  }
`;

const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  & > p:last-child {
    color: ${({ theme }) => theme.subColor};
  }
`;

const UserDataBox = styled(BorderBox)`
  gap: 2.5rem;
`;

export const Home = () => {
  const mockData = [
    {
      icon: <TopicIcon />,
      header: "생성된 주제",
      count: 0,
      unit: "개",
      label: "맞춤형 입시 미술 주제",
    },
    {
      icon: <SessionIcon />,
      header: "참여 세션",
      count: 0,
      unit: "개",
      label: "활성화된 세션",
    },
  ];

  return (
    <Wrapper>
      <Welcome>
        <h1>AI 기반 입시 미술 주제 추천 서비스 DrawMade에 오신 것을 환영합니다.</h1>
        <p>안녕하세요!</p>
      </Welcome>
      <Bundle>
        {mockData.map((data) => {
          return (
            <UserDataBox key={data.header}>
              <BoxHeader>
                {data.icon}
                <h2>{data.header}</h2>
              </BoxHeader>
              <BoxInfo>
                <p>{`${data.count}${data.unit}`}</p>
                <p>{data.label}</p>
              </BoxInfo>
            </UserDataBox>
          );
        })}
      </Bundle>
    </Wrapper>
  );
};

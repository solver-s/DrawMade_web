import styled from "styled-components";

import { Bundle, BorderBox } from "../../styled/StyledBox";

import { TopicIcon, SessionIcon } from "../../../assets/IconList";

const BoxHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & > h2 {
    font-size: 1.1rem;
  }

  & > svg {
    width: 1.5rem;
    height: 1.5rem;
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
  gap: 1.5rem;
`;

export const UserDataBundle = () => {
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
    {
      icon: null,
      header: "활동 점수",
      count: 0,
      unit: "점",
      label: "누적 활동 점수",
    },
  ];

  return (
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
  );
};

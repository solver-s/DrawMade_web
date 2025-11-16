import styled from "styled-components";

import { Button } from "../../ui/button/Button";
import { Bundle, BorderBox, IconBox } from "../../styled/StyledBox";

import {
  TopicIcon,
  SessionIcon,
  FeedbackIcon,
  KeywordIcon,
  SchoolIcon,
  ShareIcon,
} from "../../../assets/IconList";
import { useNavigate } from "react-router-dom";

const SmallIconBox = styled(IconBox)`
  padding: 0.3rem;
  border-radius: 0.5rem;
`;

const BoxHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & > h2 {
    font-size: 1.1rem;
  }
`;

const PointHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & > svg {
    width: 0.9rem;
    height: 0.9rem;
  }

  & > h3 {
    font-size: 0.9rem;
  }
`;

const Point = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  & > p {
    margin-left: 1.3rem;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.subColor};
  }
`;

const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 0.5rem;

  & > p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.subColor};
  }
`;

const IntroBox = styled(BorderBox)`
  gap: 0.5rem;

  & > button {
    margin-top: 0.5rem;
  }
`;

export const IntroBundle = () => {
  const navigate = useNavigate();

  const IntroData = [
    {
      icon: <TopicIcon />,
      header: "미술 주제",
      label: "AI로 입시 미술 주제를 생성해보세요 !",
      points: [
        { icon: <SchoolIcon />, header: "대학교 및 학과 맞춤", label: "원하는 대학교를 입력해보세요" },
        {
          icon: <KeywordIcon />,
          header: "키워드 기반 추천",
          label: "특정 키워드를 입력하여 더 정확한 주제를 받아보세요",
        },
      ],
      button: {
        isDisabled: false,
        content: "주제 생성하기",
        onClick: () => {
          navigate("/topic");
        },
      },
    },
    {
      icon: <SessionIcon />,
      header: "세션 공유",
      label: "다른 사람들과 주제를 공유하고 함께 그려보세요 !",
      points: [
        { icon: <ShareIcon />, header: "공유 공간", label: "생성한 주제로 세션을 만들고 친구를 초대하세요" },
        {
          icon: <FeedbackIcon />,
          header: "동료 평가",
          label: "완성한 작품을 업로드하고 피드백을 받아보세요",
        },
      ],
      button: {
        isDisabled: false,
        content: "주제 생성하기",
        onClick: () => {
          navigate("/session");
        },
      },
    },
  ];

  return (
    <Bundle>
      {IntroData.map((data) => {
        return (
          <IntroBox key={data.header}>
            <BoxHeader>
              <SmallIconBox>{data.icon}</SmallIconBox>
              <h2>{data.header}</h2>
            </BoxHeader>
            <BoxInfo>
              <p>{data.label}</p>
            </BoxInfo>
            {data.points.map((point) => {
              return (
                <Point key={point.header}>
                  <PointHeader>
                    {point.icon}
                    <h3>{point.header}</h3>
                  </PointHeader>
                  <p>{point.label}</p>
                </Point>
              );
            })}
            <Button {...data.button} />
          </IntroBox>
        );
      })}
    </Bundle>
  );
};

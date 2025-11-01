import styled from "styled-components";

import AppIcon from "../../../assets/main.svg?react";
import KaKaoIcon from "../../../assets/kakao.svg?react";

import { Header } from "../../ui/Header";

const Wrapper = styled.div`
  margin-top: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  & > h1 {
    font-size: 4.5rem;
    font-weight: 400;
    letter-spacing: 0.3rem;
  }

  & > p {
    color: ${({ theme }) => theme.subColor};
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 0.5rem;
  }

  & > div p {
    color: ${({ theme }) => theme.subColor};
    font-size: 1rem;
    font-weight: 300;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.borderColor};
  padding: 0.5rem;
  border: 0.1rem solid ${({ theme }) => theme.borderColor};
  border-radius: 0.7rem;

  & > svg {
    fill: ${({ theme }) => theme.color};
    width: 4rem;
    height: 4rem;
  }
`;

const Boxes = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  & > div {
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    border: 0.1rem solid ${({ theme }) => theme.borderColor};
    border-radius: 0.5rem;
    padding: 1.5rem;
  }

  & div h2 {
    font-size: 1.3rem;
    font-weight: 300;
  }

  & div span {
    color: ${({ theme }) => theme.subColor};
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.4;
  }
`;

const KaKao = styled.button`
  color: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  border-radius: 0.3rem;
  background-color: #fee500;

  & > svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const Landing = () => {
  return (
    <Wrapper>
      {/* <Header /> */}
      <IconWrapper>
        <AppIcon />
      </IconWrapper>
      <h1>DrawMade</h1>
      <p>AI가 만드는 맞춤형 입시 미술 주제</p>
      <div>
        <p>대학교와 학과에 최적화된 입시 미술 주제를 AI가 추천해드립니다.</p>
        <p>실전과 같은 문제 구성으로 효과적인 입시 준비를 시작하세요.</p>
      </div>
      <Boxes>
        <div>
          <h2>맞춤형 주제 생성</h2>
          <span>목표 대학과 학과에 최적화된 실전 입시 주제를 AI가 생성합니다</span>
        </div>
        <div>
          <h2>키워드 기반 추천</h2>
          <span>관심 키워드를 입력하면 더욱 정교한 주제를 제공받을 수 있습니다</span>
        </div>
        <div>
          <h2>키워드 기반 추천</h2>
          <span>생성한 주제를 저장하고 언제든 다시 확인할 수 있습니다</span>
        </div>
      </Boxes>
      <KaKao>
        <KaKaoIcon />
        카카오 로그인
      </KaKao>
    </Wrapper>
  );
};

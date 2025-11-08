import styled from "styled-components";
import { Navigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import { BorderBox, Bundle } from "../ui/StyledBox";

import { MainIcon, KaKaoIcon } from "../../assets/IconList";

const Wrapper = styled.div`
  margin-top: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.borderColor};
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > h1 {
    font-size: 4.5rem;
    font-weight: 400;
    letter-spacing: 0.8rem;
  }

  & > p {
    color: ${({ theme }) => theme.color};
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 0.5rem;
  }
`;

const Info = styled.div`
  & > p {
    color: ${({ theme }) => theme.subColor};
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.5;
    letter-spacing: 0.1rem;
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

const StartBox = styled(BorderBox)`
  & > h2 {
    font-size: 1.3rem;
    font-weight: 300;
  }

  & > p {
    color: ${({ theme }) => theme.subColor};
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

const KaKaoLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  & > button {
    color: rgba(0, 0, 0, 0.85);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 1rem;
    border-radius: 0.3rem;
    background-color: #fee500;
  }

  & svg {
    width: 1rem;
    height: 1rem;
  }

  & > p {
    color: ${({ theme }) => theme.subColor};
    font-weight: 400;
    font-size: 0.9rem;
    letter-spacing: 0.1rem;
  }
`;

export const Start = () => {
  const { isLogin, handleLogin } = useAuth();

  if (isLogin) return <Navigate to="/home" replace />;

  return (
    <Wrapper>
      <IconWrapper>
        <MainIcon />
      </IconWrapper>
      <Header>
        <h1>DrawMade</h1>
        <p>AI가 만드는 맞춤형 입시 미술 주제</p>
      </Header>
      <Info>
        <p>대학교와 학과에 최적화된 입시 미술 주제를 AI가 추천해드립니다.</p>
        <p>실전과 같은 문제 구성으로 효과적인 입시 준비를 시작하세요.</p>
      </Info>
      <Bundle>
        <StartBox>
          <h2>맞춤형 주제 생성</h2>
          <p>목표 대학과 학과에 최적화된 실전 입시 주제를 AI가 생성합니다</p>
        </StartBox>
        <StartBox>
          <h2>키워드 기반 추천</h2>
          <p>관심 키워드를 입력하면 더욱 정교한 주제를 제공받을 수 있습니다</p>
        </StartBox>
        <StartBox>
          <h2>키워드 기반 추천</h2>
          <p>생성한 주제를 저장하고 언제든 다시 확인할 수 있습니다</p>
        </StartBox>
      </Bundle>
      <KaKaoLogin>
        <button onClick={handleLogin}>
          <KaKaoIcon />
          카카오 로그인
        </button>
        <p>카카오 계정으로 간편하게 시작할 수 있습니다.</p>
      </KaKaoLogin>
    </Wrapper>
  );
};

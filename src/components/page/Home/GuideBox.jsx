import styled from "styled-components";
import { BorderBox } from "../../styled/StyledBox";

const GrayBorderBox = styled(BorderBox)`
  background-color: ${({ theme }) => theme.accentColor};
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-bottom: 0.5rem;

  & > h3 {
    font-size: 1.2rem;
  }

  & > p {
    font-size: 1rem;
    color: ${({ theme }) => theme.subColor};
  }
`;

const NumberCircle = styled.div`
  padding: 0.3rem 0.5rem;
  color: ${({ theme }) => theme.themeColor};
  background-color: ${({ theme }) => theme.inverseColor};
  border-radius: 100rem;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Content = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.subColor};
    line-height: 1.5;
  }
`;

const Contents = styled.div`
  display: flex;
  flex: 1 1 0;
  gap: 1rem;
`;

export const GuideBox = () => {
  return (
    <GrayBorderBox>
      <Header>
        <h3>DrawMade 시작하기</h3>
        <p>3가지 간단한 단계로 입시 준비를 시작하세요</p>
      </Header>
      <Contents>
        <Content>
          <Title>
            <NumberCircle>1</NumberCircle>
            <h4>주제 생성</h4>
          </Title>
          <p>대학교와 학과를 선택하여 맞춤형 입시 주제를 생성하세요</p>
        </Content>
        <Content>
          <Title>
            <NumberCircle>2</NumberCircle>
            <h4>세션 생성</h4>
          </Title>
          <p>생성한 주제로 세션을 만들고 친구들과 함께 작업하세요</p>
        </Content>
        <Content>
          <Title>
            <NumberCircle>3</NumberCircle>
            <h4>작품 공유</h4>
          </Title>
          <p>완성한 작품을 업로드하고 다른 사람들과 공유하세요</p>
        </Content>
      </Contents>
    </GrayBorderBox>
  );
};

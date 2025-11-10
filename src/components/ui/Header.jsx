import { memo } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > span {
    word-spacing: 0.2rem;
    font-weight: 300;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;

  & > h1 {
    letter-spacing: 0.2rem;
  }

  & > svg {
    width: 2rem;
    height: 2rem;
  }
`;

export const Header = memo(({ header, content }) => {
  return (
    <Wrapper>
      <StyledHeader>
        <h1>{header}</h1>
      </StyledHeader>
      <span>{content}</span>
    </Wrapper>
  );
});

import { memo } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: ${({ theme, $isDisabled }) => ($isDisabled ? theme.subColor : theme.themeColor)};
  background-color: ${({ theme, $isDisabled }) => ($isDisabled ? theme.accentColor : theme.color)};
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  border: 0px;
`;

export const Button = memo(({ isDisabled = false, content, onClick, isLoading = false }) => {
  return (
    <StyledButton onClick={!isDisabled && !isLoading ? onClick : null} $isDisabled={isDisabled || isLoading}>
      {isLoading ? "주제 생성 중..." : content}
    </StyledButton>
  );
});

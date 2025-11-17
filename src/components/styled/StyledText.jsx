import { styled } from "styled-components";

export const h1_p = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > h1 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.color};
  }

  & > p {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.subColor};
  }
`;

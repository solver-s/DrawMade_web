import styled from "styled-components";

export const BorderBox = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  flex-basis: 0;
  flex-grow: 1;
  gap: 0.8rem;
  border: 0.1rem solid ${({ theme }) => theme.borderColor};
  border-radius: 1rem;
  padding: 1.5rem;
`;

export const Bundle = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

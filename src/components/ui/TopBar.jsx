import { styled } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

const Item = styled.div`
  display: flex;
  min-width: 5rem;
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  background-color: ${({ theme, $isLocated }) => ($isLocated ? theme.borderColor : "transparent")};
  cursor: pointer;
`;

const Itmes = styled.div`
  display: flex;
  flex: 0 0 0;
  background-color: ${({ theme }) => theme.accentColor};
  padding: 0.3rem 0.3rem;
  border-radius: 1.5rem;
`;

export const TopBar = ({ items }) => {
  const navigate = useNavigate();
  const located = useLocation().pathname;

  return (
    <Itmes>
      {items.map((item, idx) => {
        return (
          <Item key={idx} onClick={() => navigate(item.path)} $isLocated={located === item.path}>
            {item.name}
          </Item>
        );
      })}
    </Itmes>
  );
};

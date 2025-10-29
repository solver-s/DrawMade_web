import { routes } from "../../../utils/routes";
import Arrow from "../../../assets/arrow.svg?react";

import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.nav`
  position: absolute;
  top: 0;
  z-index: 300;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-right: 0.1rem solid ${({ theme }) => theme.borderColor};
`;

const Utils = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.borderColor};
`;

const Util = styled.button`
  display: inline-flex;
  padding: 0.2rem;
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.themeColor};

  &:hover {
    background-color: ${({ theme }) => theme.borderColor};
  }

  & > svg {
    fill: ${({ theme }) => theme.color};
    width: 0.8rem;
    height: 0.8rem;
    rotate: 180deg;
  }
`;

const List = styled.ul`
  padding: 1rem;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Item = styled.li`
  & > a {
    text-decoration: none;
  }
`;

export const Sidebar = () => {
  const [isFolded, setIsFolded] = useState(false);
  const home = routes[0];

  const handleFold = () => {
    setIsFolded((prev) => !prev);
  };

  return (
    <Wrapper $isFolded={isFolded}>
      <Utils>
        <Util>
          <Arrow />
        </Util>
        <Util onClick={handleFold}>
          <Arrow />
        </Util>
      </Utils>
      <List>
        <Item>
          <Link to={home.path}>{home.name}</Link>
        </Item>
        {home.children.map((child) => (
          <Item>
            <Link to={child.path}>{child.name}</Link>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

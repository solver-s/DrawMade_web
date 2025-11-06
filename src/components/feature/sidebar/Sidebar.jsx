import styled from "styled-components";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { services } from "../../router/routes.jsx";

import Arrow from "../../../assets/arrow.svg?react";
import Light from "../../../assets/light.svg?react";
import Dark from "../../../assets/dark.svg?react";

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  z-index: 300;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 0.1rem solid ${({ theme }) => theme.borderColor};
  width: ${({ $isFolded }) => ($isFolded ? "4rem" : "15rem")};
  transition: width 0.3s ease-in-out;
`;

const Utils = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.2rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.borderColor};

  & > :first-child {
    display: ${({ $isFolded }) => ($isFolded ? "none" : "flex")};
  }

  & > :last-child {
    rotate: ${({ $isFolded }) => ($isFolded ? "0deg" : "-180deg")};
    transition: rotate 0.2s ease-in-out;
  }
`;

const Util = styled.button`
  display: flex;
  padding: 0.3rem;
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.themeColor};

  &:hover {
    background-color: ${({ theme }) => theme.borderColor};
  }

  & > svg {
    fill: ${({ theme }) => theme.color};
    width: 0.9rem;
    height: 0.9rem;
  }
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 1rem 0.5rem;

  & span {
    display: ${({ $isFolded }) => $isFolded && "none"};
    transition: opacity 0.3s ease-in-out;
    overflow: hidden;
    white-space: nowrap;
  }

  & li {
    padding: ${({ $isFolded }) => $isFolded && "0.5rem 0rem"};
    justify-content: ${({ $isFolded }) => $isFolded && "center"};
  }
`;

const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 8rem 0.5rem 0.8rem;
  background-color: ${({ $isLocated, theme }) => ($isLocated ? theme.inverseColor : "transparent")};
  border-radius: 0.3rem;

  & > a {
    position: absolute;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: transparent;
  }

  & > span {
    color: ${({ $isLocated, theme }) => ($isLocated ? theme.themeColor : theme.color)};
    font-size: 0.9rem;
  }

  & > svg {
    flex-shrink: 0;
    fill: ${({ $isLocated, theme }) => ($isLocated ? theme.themeColor : theme.color)};
    width: 1.2rem;
    height: 1.2rem;
  }

  &:hover {
    background-color: ${({ $isLocated, theme }) => ($isLocated ? theme.inverseColor : theme.borderColor)};
  }
`;

export const Sidebar = ({ onClick }) => {
  const [isFolded, setIsFolded] = useState(false);
  const located = useLocation().pathname;

  const handleFold = () => {
    setIsFolded((prev) => !prev);
  };

  return (
    <Wrapper $isFolded={isFolded}>
      <Utils $isFolded={isFolded}>
        <Util onClick={onClick}>
          <Light />
        </Util>
        <Util onClick={handleFold}>
          <Arrow />
        </Util>
      </Utils>
      <List $isFolded={isFolded}>
        {services.map((service) => (
          <Item key={service.name} $isLocated={located === service.path}>
            {service.icon}
            <span>{service.name}</span>
            <Link to={service.path}>{service.name}</Link>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

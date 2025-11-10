import styled from "styled-components";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { useAuth } from "../../../hooks/useAuth.jsx";
import { useTheme } from "../../../hooks/useTheme.jsx";
import { services } from "../../router/router.jsx";

import { ArrowIcon, LightIcon, DarkIcon } from "../../../assets/IconList.js";

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  z-index: 300;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 0.1rem solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.themeColor};

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
    width: 0.9rem;
    height: 0.9rem;
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
    font-size: 0.9rem;
    color: ${({ theme, $isLocated }) => ($isLocated ? theme.themeColor : theme.color)};
  }

  & > svg {
    flex-shrink: 0;
    color: ${({ theme, $isLocated }) => ($isLocated ? theme.themeColor : theme.color)};
    width: 1.2rem;
    height: 1.2rem;
  }

  &:hover {
    background-color: ${({ $isLocated, theme }) => ($isLocated ? theme.inverseColor : theme.borderColor)};
  }
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 1rem 0.5rem;

  & li {
    padding: ${({ $isFolded }) => $isFolded && "0.5rem 0rem"};
    justify-content: ${({ $isFolded }) => $isFolded && "center"};
  }

  & span {
    display: ${({ $isFolded }) => $isFolded && "none"};
    overflow: hidden;
    white-space: nowrap;
  }
`;

const Image = styled.div`
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 1.5rem;
  background-color: #4d4d4d;
`;

const User = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 0.3rem;
  justify-content: ${({ $isFolded }) => $isFolded && "center"};

  & > span {
    display: ${({ $isFolded }) => $isFolded && "none"};
    color: ${({ theme }) => theme.color};
    font-size: 0.9rem;
    font-weight: 300;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    background-color: ${({ theme }) => theme.borderColor};
    cursor: pointer;
  }
`;

const Profile = styled.div`
  margin-top: auto;
  border-top: 0.1rem solid ${({ theme }) => theme.borderColor};
  padding: 0.5rem;
`;

export const Sidebar = () => {
  const { theme, handleTheme } = useTheme();
  const { user, handleLogin } = useAuth();
  const [isFolded, setIsFolded] = useState(false);
  const located = useLocation().pathname;

  const handleFold = () => {
    setIsFolded((prev) => !prev);
  };

  return (
    <Wrapper $isFolded={isFolded}>
      <Utils $isFolded={isFolded}>
        <Util onClick={handleTheme}>{theme === "light" ? <DarkIcon /> : <LightIcon />}</Util>
        <Util onClick={handleFold}>
          <ArrowIcon />
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
      <Profile onClick={handleLogin}>
        <User $isFolded={isFolded}>
          <Image />
          <span>{user.name}</span>
        </User>
      </Profile>
    </Wrapper>
  );
};

import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: absolute;
  display: flex;
  top: 0;
  z-index: 9999;
  right: 0px;
  left: 0px;
  color: white;
  justify-content: space-between;
  padding: 8px 16px;
  align-items: center;
`;

export const NavbarLogo = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  gap: 8px 16px;
`;

export const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  display: block;
  position: relative;
  padding: 0.2em 0;
  &.active {
    color: black;
    font-weight: bold;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: black;
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
  }

  &::after {
    opacity: 1;
    transform: scale(0);
    transform-origin: center;
  }
  &:focus::after {
    transform: scale(1);
  }
  &:hover::after {
    transform: scale(1);
  }
`;

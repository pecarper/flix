import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LinkNav = styled(NavLink)`
  &.active button {
    background: #000000e5;
    color: #f9fafb;
  }
`;

export const Logo = styled.img`
  height: 3.125rem;
  margin-right: 2rem;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 4rem;
  background-color: ${({ theme }) => theme.colors.primary};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  height: 80px;
`;

export const NavContainer = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

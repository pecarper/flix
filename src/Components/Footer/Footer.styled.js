import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.color};
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 80px;
  box-sizing: border-box;
`;

export const Logo = styled.img`
  height: 3.125rem; /* 50px */
`;

export const TextoFooter = styled.p`
  font-size: 0.7rem;
`;

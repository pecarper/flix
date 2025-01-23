import styled from "styled-components";

export const StyledButton = styled.button`
  width: 11.26rem;
  height: 3.375rem;
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.5rem;
  text-align: center;
  background-color: transparent;
  color: #ffffff;
  border-radius: 0.9375rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &.active {
    background: #330505;
    box-shadow: 0px 0px 0.75rem 0.25rem #2271d1 inset;
    color: #2271d1;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

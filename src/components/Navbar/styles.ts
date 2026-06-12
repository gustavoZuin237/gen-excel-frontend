import styled from "styled-components";

import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: auto;
  background-color: ${(props) => props.theme["surface"]};
  padding: 1rem;
  box-shadow: 6px 0 18px rgba(0, 0, 0, 0.35);
  position: relative;
  z-index: 1;
  border-right: 2px solid ${(props) => props.theme["primary"]};

  flex-shrink: 0;
  height: 100vh;
`;

export const LinkContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 0.5rem;
  color: ${(props) => props.theme["text"]};
  text-decoration: none;
  border-radius: 12px;
  transition: 0.5s;

  &:hover {
    background-color: ${(props) => props.theme["hover"]};
  }
`;

export const Label = styled.p`
  @media (max-width: 850px) {
    display: none;
  }
`;

export const ThemeButtonContainer = styled.div`
  margin-top: auto;
`;

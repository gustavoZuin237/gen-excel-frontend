import styled from "styled-components";

export const BackTopButton = styled.button<{ $visible: boolean }>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;

  color: #fff;
  background-color: ${({ theme }) => theme["primary"]};
  border: 0;
  border-radius: 100%;

  bottom: 40%;
  right: 20px;
  z-index: 1000;
  cursor: pointer;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0) scale(1)" : "translateY(12px) scale(0.95)"};

  pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};

  transition:
    opacity 200ms ease,
    transform 200ms ease;

  &:hover {
    transition: 200ms;
    scale: 1.05;
    transform: translateY(-2px);
  }
`;

import styled, { css } from "styled-components";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "ghost"
  | "accent";

interface ButtonProps {
  $variant: ButtonVariant;
}

const buttonVariants = {
  primary: css`
    background: ${({ theme }) => theme["primary"]};
    color: ${({ theme }) => theme["text"]};
    transition: 0.3s;

    &:hover {
      background: ${({ theme }) => theme["primarySoft"]};
    }
  `,

  secondary: css`
    background: ${({ theme }) => theme["secondary"]};
    color: ${({ theme }) => theme["text"]};
    transition: 0.3s;

    &:hover {
      background: ${({ theme }) => theme["secondarySoft"]};
    }
  `,

  success: css`
    background: ${({ theme }) => theme["success"]};
    color: ${({ theme }) => theme["text"]};
    transition: 0.3s;

    filter: brightness(0.9);

    &:hover {
      filter: brightness(1.15);
      box-shadow: 0 0 0 3px rgba(2, 255, 65, 0.36);
    }
  `,

  danger: css`
    background: ${({ theme }) => theme["danger"]};
    color: ${({ theme }) => theme["text"]};
    transition: 0.3s;

    filter: brightness(0.95);

    &:hover {
      filter: brightness(1.15);
      box-shadow: 0 0 0 3px rgba(255, 2, 2, 0.36);
    }
  `,

  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme["textMuted"]};
    border: 1px solid ${({ theme }) => theme["border"]};

    &:hover {
      background: ${({ theme }) => theme["hover"]};
      color: ${({ theme }) => theme["text"]};
    }
  `,

  accent: css`
    background: ${({ theme }) => theme["accent"]};
    color: ${({ theme }) => theme["text"]};
    transition: 0.3s;

    &:hover {
      background: ${({ theme }) => theme["accentSoft"]};
    }
  `,
};

export const ButtonContainer = styled.button<ButtonProps>`
  width: 100%;
  height: 100%;
  max-width: 16rem;
  max-height: 3rem;
  min-width: 4rem;

  border: none;
  outline: none;

  padding: 0.85rem 1.25rem;

  border-radius: 8px;

  font-size: 0.95rem;
  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.2s ease,
    filter 0.2s ease,
    border 0.2s ease,
    color 0.2s ease,
    transform 0.1s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({ $variant }) => buttonVariants[$variant]}
`;

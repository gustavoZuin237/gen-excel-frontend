import styled from "styled-components";

export const StyledSelect = styled.select`
  align-self: flex-start;
  color: ${({ theme }) => theme["text"]};
  background-color: ${({ theme }) => theme["surfaceAlt"]};
  padding: 0.75rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme["border"]};
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    outline: none;
    border: 1px solid ${({ theme }) => theme["primarySoft"]};
    box-shadow: 0 0 0 3px rgba(33, 115, 70, 0.2);
  }

  @media (max-width: 850px) {
    align-self: center;
  }
`;

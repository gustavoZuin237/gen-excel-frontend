import styled from "styled-components";

export const FilenameDialogContent = styled.div`
  border-radius: 12px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  padding: 2rem 4rem;
  gap: 2rem;
  background-color: ${(props) => props.theme["surface"]};
  border: 1px solid ${({ theme }) => theme["primarySoft"]};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

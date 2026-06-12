import styled from "styled-components";

export const FileImportContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 850px) {
    margin-top: 2rem;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const FileNameLabel = styled.p`
  padding: 1rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme["secondary"]};
`;

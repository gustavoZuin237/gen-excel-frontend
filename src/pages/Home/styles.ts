import styled from "styled-components";

export const InputContainer = styled.form`
  width: 100%;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
`;

export const InputLabel = styled.p`
  align-self: flex-start;
  font-size: 0.9em;
  color: ${(props) => props.theme["text"]};
`;

export const ButtonContainer = styled.div`
  width: 100%;
  margin-top: auto;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 850px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme["danger"]};
  font-size: 0.75rem;
`;

export const RowCount = styled.div`
  width: 100%;
  color: ${(props) => props.theme["text"]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  margin-top: 2rem;

  @media (max-width: 850px) {
    align-items: center !important;
  }
`;

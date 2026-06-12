import styled from "styled-components";

export const InputLabel = styled.p`
  align-self: flex-start;
  font-size: 0.9em;
  color: ${(props) => props.theme["text"]};
`;
export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.75rem;
`;

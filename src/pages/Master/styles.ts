import styled from "styled-components";

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10rem;
  gap: 12px;

  @media (max-width: 850px) {
    justify-content: center;
  }
`;

import styled from "styled-components";

export const ImportContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

export const SearchFieldsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const NoSheetMessage = styled.h2`
  text-align: center;
  margin-block: 3rem;
`;

export const TableWrapper = styled.div`
  width: 100%;
  max-width: 950px;
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 12px;
  border: 2px solid ${(props) => props.theme["border"]};
  background-color: ${(props) => props.theme["surfaceAlt"]};
`;

export const StyledTableHeader = styled.th`
  min-width: auto;
  border: 1px solid ${(props) => props.theme["chartLines"]};
  color: ${(props) => props.theme["text"]};
  padding: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const StyledTableCell = styled.td`
  width: max-content;
  text-align: center;
  border: 1px solid ${(props) => props.theme["chartLines"]};
  color: ${(props) => props.theme["text"]};
  padding: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

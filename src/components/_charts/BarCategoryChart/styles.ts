import styled from "styled-components";

import { ResponsiveContainer } from "recharts";

export const StyledResponsiveContainer = styled(ResponsiveContainer)`
  height: auto;
  min-height: 500px;
  padding-top: 2rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme["surfaceAlt"]};
`;

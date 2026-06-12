import styled from "styled-components";

import { ResponsiveContainer } from "recharts";

export const StyledResponsiveContainer = styled(ResponsiveContainer)`
  border-radius: 12px;
  background-color: ${({ theme }) => theme["surfaceAlt"]};
`;

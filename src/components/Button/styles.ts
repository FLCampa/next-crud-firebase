// External Libraries
import styled from "styled-components";

// Interfaces
interface ContainerProps {
  background: string;
}

export const Container = styled.button<ContainerProps>`
  padding: 8px 16px;
  margin-bottom: 6px;

  color: white;
  border-radius: 6px;
  background: ${(props) => (props.background ? props.background : "gray")};
`;

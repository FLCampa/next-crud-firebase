// External Libraries
import styled from "styled-components";

export const TableContainer = styled.table`
  width: 100%;

  overflow: hidden;
  border-radius: 5px;
  border-collapse: collapse;

  > thead {
    color: white;
    background: #4169e1;

    th:last-child {
      text-align: center;
    }
  }

  th,
  td {
    text-align: left;
    padding: 5px;
  }
`;

// Interfaces
interface TableRowProps {
  index: number;
}

export const TableRow = styled.tr<TableRowProps>`
  background: ${(props) => (props.index % 2 === 0 ? "#EAE5FE" : "#DAD0FC")};

  td:last-child {
    display: flex;
    justify-content: center;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 30px;
    height: 30px;
  }
`;

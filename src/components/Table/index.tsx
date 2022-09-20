// External Libraries
import React from "react";

// Assets
import { EditIcon, TrashIcon } from "../../styles/icons";

// Models
import Client from "../../models/client";

// Stylization
import { TableContainer, TableRow } from "./styles";

// Interfaces
interface TableProps {
  clients: Client[];
  selectedClient?: (client: Client) => void;
  excludedClient?: (client: Client) => void;
}

const Table: React.FC<TableProps> = ({
  clients,
  selectedClient,
  excludedClient,
}) => {
  const showActions = selectedClient || excludedClient;

  function renderHeader() {
    return (
      <tr>
        <th>Code</th>
        <th>Name</th>
        <th>Age</th>
        {showActions && <th>Actions</th>}
      </tr>
    );
  }

  function renderData() {
    return clients?.map((client, i) => {
      return (
        <TableRow key={client.id} index={i}>
          <td>{client.id}</td>
          <td>{client.name}</td>
          <td>{client.age}</td>
          {showActions && renderActions(client)}
        </TableRow>
      );
    });
  }

  function renderActions(client: Client) {
    return (
      <td>
        {selectedClient && (
          <button onClick={() => selectedClient?.(client)}>{EditIcon}</button>
        )}
        {excludedClient && (
          <button onClick={() => excludedClient?.(client)}>{TrashIcon}</button>
        )}
      </td>
    );
  }

  return (
    <TableContainer>
      <thead>{renderHeader()}</thead>

      <tbody>{renderData()}</tbody>
    </TableContainer>
  );
};

export default Table;

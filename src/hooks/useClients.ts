// External Libraries
import { useEffect, useState } from "react";
import ClientCollection from "../firebase/db/clientCollection";

// Models
import Client from "../models/client";
import ClientRepository from "../models/clientRepository";

// Hooks
import useTableOrForm from "./useTableOrForm";

export default function useClients() {
  const repo: ClientRepository = new ClientCollection();

  const { visibleTable, showTable, showForm } = useTableOrForm();

  const [client, setClient] = useState<Client>(Client.void());
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(getAll, []);

  function getAll() {
    repo.getAll().then((clients) => {
      setClients(clients);
      showTable();
    });
  }

  function selectClient(client: Client) {
    setClient(client);
    showForm();
  }

  async function deleteClient(client: Client) {
    await repo.delete(client);
    getAll();
  }

  function newClient() {
    setClient(Client.void());
    showForm();
  }

  async function saveClient(client: Client) {
    await repo.save(client);
    getAll();
  }

  return {
    client,
    clients,
    newClient,
    saveClient,
    deleteClient,
    selectClient,
    getAll,
    visibleTable,
    showTable,
  };
}

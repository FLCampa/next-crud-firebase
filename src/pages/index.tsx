// Components
import Layout from "../components/Layout";
import Button from "../components/Button";
import Table from "../components/Table";
import Form from "../components/Form";

// Hooks
import useClients from "../hooks/useClients";

export default function Home() {
  const {
    client,
    clients,
    newClient,
    saveClient,
    selectClient,
    deleteClient,
    visibleTable,
    showTable,
  } = useClients();

  return (
    <div className="container">
      <Layout title="Nextjs CRUD With Firebase">
        {visibleTable ? (
          <>
            <div className="buttonContainer">
              <Button backgroundColor="green" onClick={newClient}>
                New Client
              </Button>
            </div>
            <Table
              clients={clients}
              selectedClient={selectClient}
              excludedClient={deleteClient}
            />
          </>
        ) : (
          <Form
            client={client}
            onChangeClient={saveClient}
            canceled={showTable}
          />
        )}
      </Layout>
    </div>
  );
}

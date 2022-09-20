// External Libraries
import React, { useState } from "react";

// Components
import Button from "../Button";
import Input from "../Input";

// Models
import Client from "../../models/client";

// Stylization
import { ButtonContainer } from "./styles";

// Interfaces
interface FormProps {
  client: Client;
  canceled?: () => void;
  onChangeClient?: (client: Client) => void;
}

const Form: React.FC<FormProps> = ({ client, canceled, onChangeClient }) => {
  const id = client?.id;
  const [name, setName] = useState(client?.name ?? "");
  const [age, setAge] = useState(client?.age ?? 0);

  return (
    <>
      {id && <Input readOnly text="Code" value={id} />}
      <Input text="Name" value={name} onChangeText={setName} />
      <Input text="Age" type="number" value={age} onChangeText={setAge} />

      <ButtonContainer>
        <Button
          backgroundColor="blue"
          onClick={() => onChangeClient?.(new Client(name, +age, id))}
        >
          {id ? "Edit" : "Save"}
        </Button>
        <Button onClick={canceled}>Cancel</Button>
      </ButtonContainer>
    </>
  );
};

export default Form;

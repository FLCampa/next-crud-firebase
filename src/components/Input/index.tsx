// External Libraries
import React from "react";

// Stylization
import { Container, Label, InputElement } from "./styles";

// Interfaces
interface InputProps {
  type?: "text" | "number";
  text: string;
  value: any;
  readOnly?: boolean;
  onChangeText?: (value: any) => void;
}

const Input: React.FC<InputProps> = ({
  type,
  text,
  value,
  readOnly,
  onChangeText,
}) => {
  return (
    <Container>
      <Label>{text}</Label>
      <InputElement
        type={type ?? "text"}
        value={value}
        readOnly={readOnly}
        readOnlyColor={readOnly}
        onChange={(e) => onChangeText?.(e.target.value)}
      />
    </Container>
  );
};

export default Input;

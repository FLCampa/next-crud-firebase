// External Libraries
import React from "react";

// Stylization
import { Container } from "./styles";

// Interfaces
interface ButtonProps {
  backgroundColor?: "green" | "blue" | "gray";
  children: any;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  children,
  onClick,
}) => {
  return (
    <Container onClick={onClick} background={backgroundColor}>
      {children}
    </Container>
  );
};

export default Button;

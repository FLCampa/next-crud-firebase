// External Libraries
import React from "react";

// Stylization
import { Container, Title, Content } from "./styles";

// Interfaces
interface LayoutProps {
  title: string;
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <Container>
      <Title>
        <h1>{title}</h1>
        <hr />
      </Title>

      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;

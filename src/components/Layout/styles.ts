// External Libraries
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;

  color: #15202b;

  background: white;
  border-radius: 5px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    padding: 0 30px;
  }

  > hr {
    width: 100%;

    border-color: #15202b;
  }
`;

export const Content = styled.div`
  padding: 25px;
`;

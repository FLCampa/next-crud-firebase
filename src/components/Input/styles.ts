// External Libraries
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 12px;
`;

export const Label = styled.label`
  margin-bottom: 4px;
`;

interface InputElementProps {
  readOnlyColor: boolean;
}

export const InputElement = styled.input<InputElementProps>`
  padding: 6px 8px;

  outline: none;
  border: 1px solid purple;
  border-radius: 3px;
  background: whitesmoke;

  &:focus {
    background: ${(props) => (props.readOnlyColor ? "" : "white")};
  }
`;

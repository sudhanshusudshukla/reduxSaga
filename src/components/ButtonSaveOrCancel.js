import React from "react";
import { Button } from "semantic-ui-react";

function ButtonSaveOrCancel({ addEntry, description, value }) {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>Cancel</Button>
      <Button.Or />
      <Button primary onClick={() => addEntry(description, value)}>
        Ok
      </Button>
    </Button.Group>
  );
}

export default ButtonSaveOrCancel;

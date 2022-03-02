import React from "react";
import { useState } from "react/cjs/react.development";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

function NewEntryForm({ addEntry }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="New Shinny thing"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Form.Input
          width={4}
          label="value"
          placeholder="100.00"
          icon="dollar"
          iconPosition="left"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Form.Group>
      <ButtonSaveOrCancel
        addEntry={addEntry}
        description={description}
        value={value}
      />
    </Form>
  );
}

export default NewEntryForm;

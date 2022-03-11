import React from "react";

import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";
import { Form } from "semantic-ui-react";

function NewEntryForm({
  addEntry,
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
}) {
  return (
    <Form unstackable>
      <EntryForm
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />

      <ButtonSaveOrCancel addEntry={addEntry} />
    </Form>
  );
}

export default NewEntryForm;

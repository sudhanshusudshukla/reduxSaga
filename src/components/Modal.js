import React from "react";
import { Button, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";

function ModalEdit({
  isOpen,
  setIsOpen,
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
}) {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <EntryForm
            description={description}
            setDescription={setDescription}
            value={value}
            setValue={setValue}
            isExpense={isExpense}
            setIsExpense={setIsExpense}
          />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button.Group>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
          <Button.Or />
          <Button primary onClick={() => setIsOpen(false)}>
            Save
          </Button>
        </Button.Group>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalEdit;

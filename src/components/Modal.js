import React from "react";
import { Button, Modal } from "semantic-ui-react";
import NewEntryForm from "./NewEntryForm";

function ModalEdit({ isOpen, setIsOpen }) {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <NewEntryForm />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button.Group>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
          <Button.Or />
          <Button primary>Save</Button>
        </Button.Group>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalEdit;

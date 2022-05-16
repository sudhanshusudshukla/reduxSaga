import React from "react";
import { useDispatch } from "react-redux";
import { Button, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";
import { closEditModal } from "../data/actions/modals.actions";
import useEntryDetails from "../hooks/useEntryDetails";

function ModalEdit({ isOpen, description, value, isExpense, id }) {
  const entryUpdate = useEntryDetails(description, value, isExpense);
  const dispatch = useDispatch();
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <EntryForm
            description={entryUpdate.description}
            value={entryUpdate.value}
            isExpense={entryUpdate.isExpense}
            setDescription={entryUpdate.description}
            setValue={entryUpdate.setValue}
            setIsExpense={entryUpdate.setIsExpense}
          />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button.Group>
          <Button onClick={() => dispatch(closEditModal())}>Close</Button>
          <Button.Or />
          <Button primary onClick={() => entryUpdate.updateEntry(id)}>
            Save
          </Button>
        </Button.Group>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalEdit;

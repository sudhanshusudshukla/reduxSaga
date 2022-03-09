import React from "react";
import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";

function EntryLines({ entries, deleteEntry, setIsOpen }) {
  return (
    <Container>
      {entries.map((entry) => (
        <EntryLine
          key={entry.id}
          {...entry}
          deleteEntry={deleteEntry}
          setIsOpen={setIsOpen}
          //   description={entry.description}
          //   value={entry.value}
          //   isExpense={entry.isExpense}
        />
      ))}
    </Container>
  );
}

export default EntryLines;

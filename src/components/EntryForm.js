import React, { Fragment } from "react";
import { Checkbox, Form, Segment } from "semantic-ui-react";

function EntryForm({
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
}) {
  return (
    <Fragment>
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

      <Segment compact>
        <Checkbox
          toggle
          label="is expense"
          checked={isExpense}
          onChange={() => setIsExpense((oldState) => !oldState)}
        />
      </Segment>
    </Fragment>
  );
}

export default EntryForm;

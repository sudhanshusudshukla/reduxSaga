import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Segment, Grid, Icon } from "semantic-ui-react";
import { removeEntryRedux } from "../data/actions/entries.actions";
import { openEditModal } from "../data/actions/modals.actions";

function EntryLine({ id, description, value, isExpense = false }) {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              {description}
            </Grid.Column>
            <Grid.Column width={3}>{value}</Grid.Column>
            <Grid.Column width={3}>
              <Icon
                name="edit"
                bordered
                onClick={() => dispatch(openEditModal(id))}
              />
              <Icon
                name="trash"
                bordered
                onClick={() => dispatch(removeEntryRedux(id))}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Fragment>
  );
}

export default EntryLine;

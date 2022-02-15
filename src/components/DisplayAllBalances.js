import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

function DisplayAllBalances(props) {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance title="Incoming:" value="1450.09" color="green" />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance title="Expense:" value="850.09" color="red" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default DisplayAllBalances;

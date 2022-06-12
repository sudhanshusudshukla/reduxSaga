import axios from "axios";
import { call, put, take } from "redux-saga/effects";
import entriesTypes from "../data/actions/entries.actions";

export function* deleteEntrySaga() {
  while (true) {
    const { payload } = yield take(entriesTypes.REMOVE_ENTRY);
    yield call(deleteEntrie, payload.id);
    yield put({
      type: entriesTypes.REMOVE_ENTRY_RESULTS,
      payload: { id: payload.id },
    });
  }
}

async function deleteEntrie(id) {
  await axios.delete(`http://localhost:3002/entries/${id}`);
  await axios.delete(`http://localhost:3002/values/${id}`);
}

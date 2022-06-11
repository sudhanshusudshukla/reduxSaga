import { call, fork, put, take } from "redux-saga/effects";
import axios from "axios";
import entriesTypes from "../data/actions/entries.actions";
import {
  getSuccessEntries,
  getEntriesDetails,
} from "../data/actions/entries.actions";

/* const fetchDataFunction = async () => {
  const result = await axios.get("http://localhost:3002/entries");
  console.log(result);
}; */

export function* getAllEntries() {
  yield take(entriesTypes.GET_ENTRIES);
  //console.log("i need to display get sagas");
  const { data } = yield call(axios, "http://localhost:3002/entries");
  //ca be refactored as
  //yield put({ type: entriesTypes.SUCCESS_ENTRIES, payload: result.data });
  yield put(getSuccessEntries(data));
}

export function* getEntryDetail(id) {
  const { data } = yield call(axios, `http://localhost:3002/values/${id}`);
  console.log(data);
  // same can be refactored as :
  yield put(getEntriesDetails(id, data));
  /* yield put({
    type: entriesTypes.SUCCESS_ENTRIES_DETAILS,
    payload: { id, entry: data },
  }); */
}

export function* getSuccessEntriesDetails() {
  const { payload } = yield take(entriesTypes.SUCCESS_ENTRIES);
  for (let index = 0; index < payload.length; index++) {
    const entry = payload[index];
    yield fork(getEntryDetail, entry.id);
  }
}

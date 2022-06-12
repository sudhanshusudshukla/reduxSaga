const types = {
  GET_ENTRIES: "GET_ENTRIES",
  SUCCESS_ENTRIES: "SUCCESS_ENTRIES",
  SUCCESS_ENTRIES_DETAILS: "SUCCESS_ENTRIES_DETAILS",
  ADD_ENTRY: "ADD_ENTRY",
  REMOVE_ENTRY: "REMOVE_ENTRY",
  UPDATE_ENTRY: "UPDATE_ENTRY",
  REMOVE_ENTRY_RESULTS: "REMOVE_ENTRY_RESULTS",
  ADD_ENTRY_RESULT: "ADD_ENTRY_RESULT",
};

export default types;

export const addEntryRedux = (payload) => {
  return { type: types.ADD_ENTRY, payload };
};
export const removeEntryRedux = (id) => {
  return { type: types.REMOVE_ENTRY, payload: { id } };
};
export const updateEntryRedux = (id, entry) => {
  return { type: types.UPDATE_ENTRY, payload: { id, entry } };
};

export const getAllEntries = () => {
  return { type: types.GET_ENTRIES };
};

export const getSuccessEntries = (entries) => {
  return { type: types.SUCCESS_ENTRIES, payload: entries };
};

export const getEntriesDetails = (id, entry) => {
  return { type: types.SUCCESS_ENTRIES_DETAILS, payload: { id, entry } };
};

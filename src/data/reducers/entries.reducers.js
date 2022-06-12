import entriesTypes from "../actions/entries.actions.js";

const reducer = (state = initialEntries, action) => {
  let newEntries;
  switch (action.type) {
    case entriesTypes.SUCCESS_ENTRIES:
      return action.payload;
    case entriesTypes.ADD_ENTRY_RESULT:
      newEntries = state.concat({ ...action.payload });
      return newEntries;
    case entriesTypes.REMOVE_ENTRY_RESULTS:
      newEntries = state.filter((entry) => entry.id !== action.payload.id);
      return newEntries;
    case entriesTypes.SUCCESS_ENTRIES_DETAILS:
      //case entriesTypes.UPDATE_ENTRY:
      newEntries = [...state];
      const index = newEntries.findIndex(
        (entry) => entry.id === action.payload.id
      );
      newEntries[index] = { ...newEntries[index], ...action.payload.entry };
      return newEntries;
    default:
      return state;
  }
};

export default reducer;

var initialEntries = [];

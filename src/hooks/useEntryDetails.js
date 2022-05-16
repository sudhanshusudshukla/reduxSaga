import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addEntryRedux,
  updateEntryRedux,
} from "../data/actions/entries.actions";
import { v4 as uuidv4 } from "uuid";
import { closEditModal } from "../data/actions/modals.actions";

function useEntryDetails(desc = "", val = "", isExp = false) {
  const [description, setDescription] = useState(desc);
  const [value, setValue] = useState(val);
  const [isExpense, setIsExpense] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setDescription(desc);
    setValue(val);
    setIsExpense(isExp);
  }, [desc, val, isExp]);

  function updateEntry(id) {
    dispatch(
      updateEntryRedux(id, {
        id,
        description,
        value,
        isExpense,
      })
    );
    dispatch(closEditModal());
    resetValues();
  }

  function addEntry() {
    dispatch(
      addEntryRedux({
        id: uuidv4(),
        description,
        value,
        isExpense,
      })
    );
    resetValues();
  }
  function resetValues() {
    setDescription("");
    setIsExpense(true);
    setValue("");
  }
  return {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntry,
    updateEntry,
  };
}

export default useEntryDetails;

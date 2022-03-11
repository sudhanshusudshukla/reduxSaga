import { Container } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayAllBalances from "./components/DisplayAllBalances";
import { useState } from "react";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/Modal";
import { useEffect } from "react";

var initialEntries = [
  {
    id: "1",
    description: "Work income",
    value: 2000.0,
    isExpense: false,
  },
  {
    id: "2",
    description: "Water Bill",
    value: 20.0,
    isExpense: true,
  },
  {
    id: "3",
    description: "Rent",
    value: 200.0,
    isExpense: true,
  },
  {
    id: "4",
    description: "Power Bill",
    value: 200.0,
    isExpense: true,
  },
];

function App() {
  const [entries, setEntries] = useState(initialEntries);

  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpense += Number(entry.value));
      }
      return (totalIncome += Number(entry.value));
    });
    setTotal(totalIncome - totalExpense);
    setIncomeTotal(totalIncome);
    setExpenseTotal(totalExpense);
  }, [entries]);

  const resetEntry = () => {
    setDescription("");
    setValue("");
    setIsExpense(true);
  };

  const deleteEntry = (id) => {
    const result = entries.filter((entry) => entry.id !== id);

    setEntries(result);
    resetEntry();
  };

  const editEntry = (id) => {
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  };

  const addEntry = () => {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    setEntries(result);
  };

  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBalance title="Your Balance:" value={total} size="small" />

      <DisplayAllBalances
        incomeTotal={incomeTotal}
        expenseTotal={expenseTotal}
      />
      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        editEntry={editEntry}
      />

      <MainHeader title="History" type="h3" />

      <MainHeader title="Add New Transaction" type="h3" />

      <NewEntryForm
        addEntry={addEntry}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;

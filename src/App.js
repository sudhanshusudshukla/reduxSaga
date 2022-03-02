import { Container } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayAllBalances from "./components/DisplayAllBalances";
import { useState } from "react";
import EntryLines from "./components/EntryLines";

var initialEntries = [
  {
    id: "1",
    description: "Work income",
    value: "$2000.00",
    isExpense: false,
  },
  {
    id: "2",
    description: "Water Bill",
    value: "$20.00",
    isExpense: true,
  },
  {
    id: "3",
    description: "Rent",
    value: "$200.00",
    isExpense: true,
  },
  {
    id: "4",
    description: "Power Bill",
    value: "$200.00",
    isExpense: true,
  },
];

function App() {
  const [entries, setEntries] = useState(initialEntries);

  const deleteEntry = (id) => {
    const result = entries.filter((entry) => entry.id !== id);

    setEntries(result);
  };

  const addEntry = (description, value) => {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
    });
    setEntries(result);
  };

  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBalance title="Your Balance:" value="2450.09" size="small" />

      <DisplayAllBalances />
      <EntryLines entries={entries} deleteEntry={deleteEntry} />

      <MainHeader title="History" type="h3" />

      <MainHeader title="Add New Transaction" type="h3" />

      <NewEntryForm addEntry={addEntry} />
    </Container>
  );
}

export default App;

import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayAllBalances from "./components/DisplayAllBalances";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/Modal";

import { useSelector } from "react-redux";

function App() {
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState();
  const { isOpen, id } = useSelector((state) => state.modals);
  const entries = useSelector((state) => state.entries);

  useEffect(() => {
    const index = entries.findIndex((entry) => entry.id === id);
    setEntry(entries[index]);
  }, [isOpen, id, entries]);

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

  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBalance title="Your Balance:" value={total} size="small" />

      <DisplayAllBalances
        incomeTotal={incomeTotal}
        expenseTotal={expenseTotal}
      />
      <EntryLines entries={entries} />

      <MainHeader title="History" type="h3" />

      <MainHeader title="Add New Transaction" type="h3" />

      <NewEntryForm />
      <ModalEdit isOpen={isOpen} {...entry} />
    </Container>
  );
}

export default App;

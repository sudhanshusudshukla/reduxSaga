import { Container } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayAllBalances from "./components/DisplayAllBalances";
import EntryLine from "./components/EntryLine";

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBalance title="Your Balance:" value="2450.09" size="small" />

      <DisplayAllBalances />

      <MainHeader title="History" type="h3" />

      <EntryLine description="income" value="$10" />
      <EntryLine description="expense" value="$20" isExpense />

      <MainHeader title="Add New Transaction" type="h3" />

      <NewEntryForm />
    </Container>
  );
}

export default App;

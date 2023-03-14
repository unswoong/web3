import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <Card star="4"></Card>
      <Card star="2"></Card>
      <Card star="5"></Card>
      <Card star="6"></Card>
      <Card star="9"></Card>
      <Card star="1"></Card>
    </div>
  );
}

export default App;

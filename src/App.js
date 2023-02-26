import "./App.css";
import data from "./data.json";
import Heading from "./Heading";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <Heading />
      <Card data={data} />
    </div>
  );
}

export default App;

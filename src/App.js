import "./App.css";
import data from "./data.json";
import Header from "./Header";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <Header/>
<Card data={data}/>
    </div>
  );
}

export default App;

import "./App.css";
import Car from "./components/Car";
import CardList from "./components/CardList";
import Formss from "./components/Formss";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Car />
      <CardList />
      <Formss />
    </div>
  );
}

export default App;

import "./App.css";
import Dictionary from "./components/Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1 className="text-center">Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
    </div>
  );
}

export default App;

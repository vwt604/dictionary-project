import "./App.css";
import Dictionary from "./components/Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1 className="text-center display-4">Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="welcome" />
        </main>
        <footer>
          <a
            href="https://github.com/vwt604/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            📚 Project
          </a>{" "}
          by Vanessa 🐱
        </footer>
      </div>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code className="text-5xl text-danger">src/App.js</code> and save
          to reload.
        </p>
        <Counter />
      </header>
    </div>
  );
}

export default App;

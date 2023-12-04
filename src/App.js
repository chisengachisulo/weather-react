import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <p>
        {" "}
        <a
          href="https://github.com/chisengachisulo/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>{" "}
        by chisenga chisulo
      </p>
    </div>
  );
}

export default App;

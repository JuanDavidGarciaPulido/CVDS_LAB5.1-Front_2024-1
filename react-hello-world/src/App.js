import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Juan David García Pulido
        </p>
          <HelloWorld/>
      </header>
    </div>
  );
}

export default App;

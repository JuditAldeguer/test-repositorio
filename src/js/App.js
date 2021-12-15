import logo from '../logo.svg';
import '../css/App.css';
import MenuItem from './MenuItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <ul>
            <MenuItem text="Blog" href="https://adalab.es/blog" openInNewTab />
            <MenuItem text="Contacto" href="https://adalab.es/contacto" />
          </ul>
        </nav>
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import logo from '../logo.svg';
import '../css/App.css';
import MenuItem from './MenuItem';
import kata from '../services/kataPadding';
import area from '../services/area';

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
          className="Repository-link"
          href="https://github.com/JuditAldeguer/test-repository"
          target="_blank"
          rel="noopener noreferrer"
        >
          See more in the Repository
        </a>
      </header>
      <main>
        Test Kata: {kata('xxxx', 0, 'x')}
        Test Area: {area.getSquareTriangle(3,4)}
      </main>
    </div>
  );
}

export default App;

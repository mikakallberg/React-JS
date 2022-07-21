import './App.css';
import FunctionalGreetingWitProps from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      <FunctionalGreetingWitProps greeting="nice to meet you!" name="Mike" age="32" />
    </div>
  );
}

export default App;

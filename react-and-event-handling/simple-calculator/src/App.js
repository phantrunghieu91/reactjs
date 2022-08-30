import './App.css';
import Calculator from './components/Calculator';
import AdvanceCalculator from './components/AdvanceCalculator';

function App() {
  return (
    <div className="app">
      <h1 className='app__header'>Calculator</h1>
      <main className='main'>
        <Calculator />
        <AdvanceCalculator />
      </main>
    </div>
  );
}

export default App;

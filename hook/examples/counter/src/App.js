import './App.css';
import Counter from './components/Counter';
import MyClock from './components/MyClock';
import Selector from './components/Selector';

function App() {
  return (
    <div className='app'>
      <Counter />
      <Selector />
      <MyClock />
    </div>
  );
}

export default App;

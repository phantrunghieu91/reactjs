import './App.css';
import Alert from './components/Alert.js';

function App() {
  const alertType = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark'
  ];
  return (
    <div className="App container">
      <Alert 
        text={alertType[Math.floor(Math.random() * alertType.length)]}
      />
    </div>
  );
}

export default App;

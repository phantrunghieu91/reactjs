import {useState} from 'react';
import './App.css';

const cars = ['Mecerdes S300', 'Audi R8', 'BMW Q5', 'Lamboghini Aventador'];
const colors = ['black', 'aqua', 'red', 'yellow'];

function App() {
  const [selectedCar, setSelectedCar] = useState({model: '', color: ''});

  const handleChange = e => setSelectedCar({...selectedCar, [e.target.name]: e.target.value});

  return (
    <div className="select-car">
      <h1 className='select-car__title'>Select your dream car</h1>
      <label for='model'>Select a car: </label>
      <select id='model' 
        name='model'
        onChange={handleChange}
        
        className='select-car__model'>
        {
          cars.map((car, index) => (
            <option key={index} value={car}>{car}</option>
          ))
        }
      </select>
      <br />
      <label for='color'>Select a color: </label>
      <select id='color'
        name='color'
        className='select-car__color'
        onChange={handleChange}>
          {colors.map((color, index) => (
            <option key={index} value={color}>{color}</option>
          ))}
      </select>
      <br />
      <h3 className='select-car__result'>Your select car: {selectedCar.model} - {selectedCar.color}</h3>
    </div>
  );
}

export default App;

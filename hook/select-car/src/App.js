import {useState} from 'react';
import './App.css';

function App() {
  const [selectedCar, setSelectedCar] = useState({model: '', color: ''});
  return (
    <div className="select-car">
      <h1 className='select-car__title'>Select your dream car</h1>
      <label for='model'>Select a car: </label>
      <select id='model' 
        onChange={(e) => {
          const value = e.currentTarget.value;
          setSelectedCar(prevState => ({
            ...prevState, model: value
          }))
        }}
        
        className='select-car__model'>
        <option value='Mecerdes S300'>Mecerdes S300</option>
        <option value='Audi R8'>Audi R8</option>
        <option value='BMW Q5'>BMW Q5</option>
        <option value='Lamboghini Aventador'>Lamboghini Aventador</option>
      </select>
      <br />
      <label for='color'>Select a color: </label>
      <select id='color'
        className='select-car__color'
        onChange={(e) => {
            const value = e.currentTarget.value;
            setSelectedCar(prevState => ({...prevState, color: value}))
          }}>
          <option value='black'>Black</option>
          <option value='aqua'>Aqua</option>
          <option value='yellow'>Yellow</option>
          <option value='red'>Red</option>
      </select>
      <br />
      <h3 className='select-car__result'>Your select car: {selectedCar.model} - {selectedCar.color}</h3>
    </div>
  );
}

export default App;

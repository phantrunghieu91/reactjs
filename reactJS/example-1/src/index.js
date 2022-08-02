import React from 'react';
import ReactDOM from 'react-dom/client';

// Create React Element with JS
const myName = "Kim Rae Jin";
const yourName = React.createElement(
  "h1",
  {
    id: "name",
    className: "my-name",
    style: {
      textAlign: "center",
      color: "white",
      backgroundColor: "black"
    }
  },
  `My name is ${myName}!`
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(yourName);

// JSX
root.render(
  <h1 
    id = "name" 
    style ={{
      textAlign: 'center',
      color: 'yellow',
      backgroundColor: 'green'
    }}
  >
    My name is {myName}.
  </h1>
);

// Render fruits list
const fruits = ['Apple', 'Banana', 'Durian', 'Grape', 'Orange'];
root.render(
  <ul className='fruits'>
    {
      fruits.map(fruit => {
        const someStyles = {
          fontSize: '2rem',
          cursor: 'pointer',
          backgroundColor: 'black',
          color: 'white',
          border: '1px solid currentColor',
          padding: '10px'
        };
        return (<li className='fruit' style={someStyles}>{fruit}</li>);
      })
    }
  </ul>
);

// Show current time
function loadTime(){
  const currentTime = new Date().toLocaleTimeString();
  root.render(
    <h1>
      Hello, World! <br/>
      It's {currentTime}
    </h1>
  );
  setTimeout(loadTime, 1000);
}

loadTime();
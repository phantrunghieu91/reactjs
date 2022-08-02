import React from 'react';
import ReactDOM from 'react-dom/client'

class App extends React.Component {
    render = () => {
        return (
            <div>
                <h1>Hello world!</h1>
            </div>
        );
    };
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
import './App.css';
import './components/CounterComponent.js';
import CounterComponent from './components/CounterComponent.js';
import ChangingBackground from './components/ChangingBackgroundComponent.js';
import ToBeDelete from './components/ToBeDeleleComponent.js';
import React from 'react';
import LoginComponent from './components/LoginComponent';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      display: true,
      btnText: 'Delete',
      btnClasses: 'btn btn-danger'
    };
  }

  handleDeleteClick = () => {
    if(this.state.display) {
      this.setState({
        btnText: "Display again!",
        btnClasses: "btn btn-success"
      });
    } else {
      this.setState({
        btnText: 'Delete',
        btnClasses: 'btn btn-danger'
      });
    }

    this.setState(prevState => ({
      display: !prevState.display
    }));
  };

  render(){
    let comp;
    if(this.state.display) {
      comp = <ToBeDelete />;
    }
    return (
      <div className="App">
        <CounterComponent />
        <ChangingBackground />
        <div className='to-be-delete'>
          {comp}
          <button 
            className={this.state.btnClasses}
            onClick={this.handleDeleteClick}>{this.state.btnText}</button>
        </div>
        <LoginComponent />
      </div>
    );
  }
}

export default App;

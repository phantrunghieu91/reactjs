import React from "react";
import PropTypes from "prop-types";
import Welcome from './components/Welcome.js';
import AddComponent from './components/AddComponent.js';
import BMICaculator from "./components/BMICaculator.js";
import './App.css';

class App extends React.Component {
  render() {
    return (
      // <div>
      //   <h3>Array: {this.props.propArray}</h3>
      //   <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
      //   <h3>Func: {this.props.propFunc(3)}</h3>
      //   <h3>Number: {this.props.propNumber}</h3>
      //   <h3>String: {this.props.propString}</h3>
      //   <h3>Object: {this.props.propObject.objectName1}</h3>
      //   <h3>Object: {this.props.propObject.objectName2}</h3>
      //   <h3>Object: {this.props.propObject.objectName3}</h3>
      // </div>
      <div className='container'>
        <Welcome name='Admin'/>
        <AddComponent firstNum={5} secondNum={2} />
        <BMICaculator />
      </div>
    );
  }
}

App.propTypes = {
  propArray: PropTypes.array.isRequired,
  propBool: PropTypes.bool.isRequired,
  propFunc: PropTypes.func,
  propNumber: PropTypes.number,
  propString: PropTypes.string,
  propObject: PropTypes.object
};

App.defaultProps = {
  propArray: [1, 2, 3],
  propBool: true,
  propFunc: function(e) {
    return e;
  },
  propNumber: 1,
  propString: "String value...",

  propObject: {
    objectName1: "objectValue1",
    objectName2: "objectValue2",
    objectName3: "objectValue3"
  }
};

export default App;
import {Component} from 'react';

class CounterComponent extends Component {
    constructor(){
        super();
        this.state = {
            counter : 0
        };
    }

    handleDecreaseClick = () => {
        this.setState(state => ({
            counter: state.counter - 1
        }));
    };

    handleIncreaseClick = () => {
        this.setState(state => ({
            counter: state.counter + 1
        }));
    }

    render() {
        return (
            <div className='counter'>
                <button className='counter__decrease-btn btn btn-danger' onClick={this.handleDecreaseClick}>Decrease</button>
                <span className='counter__number fw-bold'>{this.state.counter}</span>
                <button className='counter__increase-btn btn btn-primary' onClick={this.handleIncreaseClick}>Increase</button>
            </div>
        );
    }
};

export default CounterComponent;
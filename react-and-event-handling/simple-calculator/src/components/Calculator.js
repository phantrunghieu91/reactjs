import React from 'react';
class Calculator extends React.Component {
    constructor(){
        super();
        this.state = {
            firstNum: 0,
            secondNum: 0,
            result: ''
        };
    }

    handleFirstNumChange = (e) => {
        this.setState({
            firstNum: +e.currentTarget.value
        })
    };

    handleSecondNumChange = (e) => {
        this.setState({
            secondNum: +e.currentTarget.value
        })
    };

    handleOperator = (e) => {
        // eslint-disable-next-line default-case
        switch(e.currentTarget.textContent) {
            case '+':
                this.setState(prevState => ({
                    result: (prevState.firstNum + prevState.secondNum).toFixed(2)
                }));
                break;
            case '-':
                this.setState(prevState => ({
                    result: (prevState.firstNum - prevState.secondNum).toFixed(2)
                }));
                break;
            case '*':
                this.setState(prevState => ({
                    result: (prevState.firstNum * prevState.secondNum).toFixed(2)
                }));
                break;
            case '÷':
                this.setState(prevState => ({
                    result: (prevState.firstNum / prevState.secondNum).toFixed(2)
                }));
                break;
            default:
                this.setState({
                    firstNum: 0,
                    secondNum: 0,
                    result: ''
                });
                break;
        }
    };

    render(){
        return (
            <div className='calculator'>
                <input type='number' 
                    onChange={this.handleFirstNumChange}
                    value={this.state.firstNum}
                />
                <input type='number' 
                    onChange={this.handleSecondNumChange}
                    value={this.state.secondNum}
                />
                <span className='calculator__result'>Result: {this.state.result}</span>
                <div className='calculator__operators'>
                    <button className='calculator__operators__add' onClick={this.handleOperator}>+</button>
                    <button className='calculator__operators__subtract' onClick={this.handleOperator}>-</button>
                    <button className='calculator__operators__multiply' onClick={this.handleOperator}>*</button>
                    <button className='calculator__operators__divide' onClick={this.handleOperator}>÷</button>
                    <button className='calculator__operators__reset' onClick={this.handleOperator}>C</button>
                </div>
            </div>
        );
    }
}

export default Calculator;
import {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class ChangingBackgroundComponent extends Component {
    constructor(){
        super();
        this.state = {
            red: 0,
            blue: 0,
            green: 0
        }
    }

    randomNumber(max) {
        return Math.floor(Math.random() * max);
    }

    changeBackgroundColor = () => {
        this.setState({
            red: this.randomNumber(256),
            green: this.randomNumber(256),
            blue: this.randomNumber(256)
        });
        setTimeout(this.changeBackgroundColor, 2000);
    };

    componentDidMount = () => {
        setTimeout(this.changeBackgroundColor, 2000);
    };

    render () {
        return (
            <div 
                className='changing-background d-flex justify-content-center align-items-center' 
                style={
                        {backgroundColor: `rgb(
                            ${this.state.red}, 
                            ${this.state.green}, 
                            ${this.state.blue})`}
                    }>
                <span class="changing-background__text fw-bold">
                    Changing Background<br/>
                    {`rgb(${this.state.red}, 
                            ${this.state.green}, 
                            ${this.state.blue})`}
                    </span>
            </div>
        );
    };
};

export default ChangingBackgroundComponent;
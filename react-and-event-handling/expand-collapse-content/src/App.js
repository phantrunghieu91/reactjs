import { Component } from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {
            isExpanding: false
        };
    }

    handleClick = () => {
        this.setState(prevState => ({
            isExpanding: !prevState.isExpanding
        }));
    };

    render() {
        if(this.state.isExpanding) {
            return (
                <div className='condition-rendering'>
                    <button onClick={this.handleClick}>Hide Introduction</button>
                    <div className="condition-rendering__content">
                        <h2>Introduction</h2>
                        <p>Trong ReactJs, đôi khi bạn có một số component và tùy thuộc vào từng điều kiện ví dụ như trạng thái của state, props,… mà bạn muốn hiển thị một hoặc một số component nào đó. Khi đó bạn có thể sử dụng Conditional rendering để render ra component mà bạn mong muốn.</p>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='condition-rendering'>
                    <button onClick={this.handleClick}>Show Introduction</button>
                </div>
            );
        }
        
    }
}

export default App;
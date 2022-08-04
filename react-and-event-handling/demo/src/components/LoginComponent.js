import React from 'react';
class LoginComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            text: 'PLEASE LOG IN',
            btnText: 'Login',
            isLogin: false
        }
    }

    handleClick = () => {
        this.setState(prevState => ({
            isLogin: !prevState.isLogin
        }));
        if(!this.state.isLogin) {
            this.setState({
                text: "WELCOME",
                btnText: 'Log out'
            })
        } else {
            this.setState({
                text: 'PLEASE LOG IN',
                btnText: 'Login',
            });
        }
    };

    render () {
        return (
            <div className='login-logout d-flex flex-column justify-content-center align-items-center'>
                <h3 className='login-logout__text'>{this.state.text}</h3>
                <button
                    className='btn btn-light login-logout__btn'
                    onClick={this.handleClick}
                >{this.state.btnText}</button>
            </div>
        );
    }
};

export default LoginComponent;
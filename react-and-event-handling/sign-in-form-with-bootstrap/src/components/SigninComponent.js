import { Component } from "react";
import Home from './Home.js';

class SigninComponent extends Component {
    constructor() {
        super();
        this.state = {
            form: {
                username: '',
                password: '',
                isRemember: false
            },
            isLoggedIn: false,
            isValid: false
        };
    }

    checkValidForm = () => {
        const { username, password } = this.state.form;
        const value = username && password;
        this.setState({ isValid: value });
      }

    handleRememberCheckboxChange = () => {
        this.setState((state) => {
            const {form} = state;
            form.isRemember = !form.isRemember;
            return { form };
        }, () => {this.checkValidForm()});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        if(this.state.isValid) {
            this.setState({isLoggedIn: true});
        }
    };

    handleLogOut = () => {
        this.setState({isLoggedIn: false});
    };

    handleInputChange = (e) => {
        const inputSelf = e.currentTarget;
        this.setState(state => {
            const {form} = state;
            form[inputSelf.name] = inputSelf.value;
            return {form};
        }, () => {this.checkValidForm()});
    };

    render() {
        const {isLoggedIn, form} = this.state;
        if(isLoggedIn) return <Home handleLogout={this.handleLogOut} username={form.username}/>;
        return (
            <div className="sign-in">
                <form className='sign-in__form' onSubmit={this.handleSubmit}>
                    <div className='sign-in__form__header'>
                        <div className="sign-in__form__header__logo mb-2">
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png' 
                                width='72' height='57'
                                alt='Bootstrap logo'/>
                        </div>
                        <h1 className="sign-in__form__header__title fw-bold mb-4">Please sign in</h1>
                    </div>
                    <div className="form-floating mb-3">
                        <input type='text'
                            className="form-control sign-in__form__email"
                            id='floatUsernameInput'
                            placeholder="Username"
                            name='username'
                            onChange={this.handleInputChange}
                            value={form.username}
                        />
                        <label for='floatUsernameInput'>Username</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type='password'
                            className="form-control sign-in__form__password"
                            id='floatPasswordInput'
                            placeholder="Password"
                            name='password'
                            onChange={this.handleInputChange}
                            value={form.password}
                        />
                        <label for='floatPasswordInput'>Password</label>
                    </div>
                    <div className="form-check ms-5 mb-4">
                        <input type='checkbox'
                            className="form-check-input"
                            id='formCheckDefault'
                            onChange={this.handleRememberCheckboxChange}
                            value={form.isRemember}/>
                        <label for='formCheckDefault' className="form-check-label">Remember me</label>
                    </div>
                    <button className="btn btn-primary w-100">Sign in</button>
                </form>
            </div>
        );
    }
}

export default SigninComponent;
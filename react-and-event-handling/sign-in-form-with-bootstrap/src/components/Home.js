import { Component } from "react";

class Home extends Component {
    componentWillUnmount () {
        console.log('back to sign in form!');
        alert(`Good bye, ${this.props.username}!`);
    };

    render() {
        return (
            <div className="sign-in">
                <form className='sign-in__form'>
                    <div className='sign-in__form__header'>
                        <h1 className="sign-in__form__header__title fw-bold mb-4">Welcome back, {this.props.username}!</h1>
                        <button className="btn btn-primary w-100"
                            onClick={this.props.handleLogOut}>Log out</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Home;
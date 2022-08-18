import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const navigate = useNavigate();

    return (
        <div className="app__signin">
            <h1>Sign in</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validate={(values) => {
                    const errors = {};

                    if(!values.email) errors.email = 'Required';
                    else if(values.email !== 'admin@gmail.com') errors.email = 'Wrong email';

                    if(!values.password) errors.password = 'Required';
                    else if(values.password !== 'letmein') errors.password = 'Wrong password';

                    return errors;
                }}
                onSubmit={(values, actions) => {
                    alert("Sign in success!");
                    setTimeout(() => {
                        navigate('/', {state: {username: 'Admin', email: values.email}});
                        // alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                    }, 500);
                }}
            >
                {props => (
                    <form className='app__signin__form' onSubmit={props.handleSubmit}>
                        <div className={`app__signin__form__custom-input`}>
                            <label htmlFor='email'>
                                <span>Email</span>
                                <span className='app__signin__form__custom-input__error'>{props.errors.email}</span>
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                onChange={props.handleChange}
                                value={props.values.email}
                            />
                        </div>
                        <div className={`app__signin__form__custom-input`}>
                            <label htmlFor='password'>
                                <span>Password</span>
                                <span className='app__signin__form__custom-input__error'>{props.errors.password}</span>
                            </label>
                            <input
                                type='password'
                                name='password'
                                id='password'
                                onChange={props.handleChange}
                                value={props.values.password}
                            />
                        </div>
                        <button type='submit' className='app__signin__form__submit'>Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    );
}
export default Signin;
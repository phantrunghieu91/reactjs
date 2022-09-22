import MainLayout from "../components/layout/MainLayout/Main";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import css from '../styles/Signin.module.css';
import { connect } from 'react-redux';
import { LoginRequest } from "../redux/actions/loginAction";
import { useRouter } from "next/router";
import { useEffect } from "react";

const formSechema = Yup.object().shape({
    email: Yup
    .string()
    .required('Required')
    .email('Invalid email address')
    .min(6, 'Must have more than 6 characters'),
    password: Yup
    .string()
    .required('Required')
    .min(6, 'Must have more than 6 characters')
});

function SignIn(props) {
    const { loginData, loginRequest } = props;
    const router = useRouter();

    useEffect(() => {
        if(loginData.userLogined !== '') setTimeout(() => router.push('/'), 1000);
    });

    return (
        <MainLayout title='Sign in'>
            <div className={css.container}>
                <h1 className={css.header}>Sign in</h1>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    enableReinitialize={true}
                    validationSchema={formSechema}
                    onSubmit={ values => {
                        loginRequest(values);
                    }}
                >
                    {
                        ({errors, touched}) => (
                            <Form className={css.signinForm}>
                                <div className={css.loginError}>{ loginData.message !== '' ? loginData.message : ''}</div>
                                <div className={`${css.inputGroup} ${touched.email && errors.email ? css.error : ''}`}>
                                    <Field 
                                        type='email'
                                        name='email'
                                        placeholder='Email here'
                                    />
                                    <p className={css.errorMsg}>{ touched.email && errors.email ? errors.email : ''}</p>
                                </div>
                                <div className={`${css.inputGroup} ${touched.password && errors.password ? css.error : ''}`}>
                                    <Field 
                                        type='password'
                                        name='password'
                                        placeholder='Password here'
                                    />
                                    <p className={css.errorMsg}>{ touched.password && errors.password ? errors.password : ''}</p>
                                </div>
                                <div className={css.buttonGroup}>
                                    <button
                                        type='submit'
                                        className={css.submitBtn}
                                    >Login</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </MainLayout>
    );
}

const mapStateToProps = state => ({
    loginData: state.loginReducer
});

const mapDispatchToProps = {
    loginRequest: LoginRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
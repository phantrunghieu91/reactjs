import {useRouter} from 'next/router';
import Layout from '../components/layout';
import styles from '../styles/Signin.module.css';

const Signin = () => {
    const router = useRouter();

    return (
        <Layout>
            <div className={styles.signin}>
                <h2>Sign in</h2>
                <form>
                    <input 
                        type='text'
                        name='signin'
                        placeholder='Username'
                    />
                    <input 
                        type='password'
                        name='signin'
                        placeholder='Password'
                    />
                    <button onClick={() => router.push('/')}>Sign in</button>
                </form>
            </div>
        </Layout>
    );
};

export default Signin;
import { useLocation } from 'react-router-dom';

const Home = () => {
    const { state } = useLocation();
    return (
        <div className='app__home'>
            <h1>Home page</h1>
            {state && (
                <div>
                    <h3>Welcome back, {state.username}!</h3>
                    <p>{state.email}</p>
                </div>
            )}
        </div>
    );
}

export default Home;
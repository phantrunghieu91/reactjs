import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/Main';

const Home = () => {
  const { username, walletId } = useSelector(state => state.user.userInfo);
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) navigate('/sign-in');
    else if (walletId === null) navigate('/my-wallet');
  }, [username, navigate, walletId]);

  return <MainLayout>{username && <h2>Welcome, {username}</h2>}</MainLayout>;
};

export default Home;

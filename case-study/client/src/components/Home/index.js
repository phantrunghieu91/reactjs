import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getWalletByUserId } from '../../features/walletSlice';
import MainLayout from '../layouts/Main';

const Home = () => {
  const { id: userId, username } = useSelector(state => state.user.userInfo);
  const { id: walletId } = useSelector(state => state.wallet.walletInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) navigate('/sign-in');
    else {
      dispatch(getWalletByUserId(userId));
      if (!walletId) navigate('/my-wallet');
    }
  }, [username, navigate, userId, dispatch, walletId]);

  return <MainLayout>{username && <h2>Welcome, {username}</h2>}</MainLayout>;
};

export default Home;

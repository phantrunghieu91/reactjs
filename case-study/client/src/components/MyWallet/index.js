import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCurrencyList, getWalletById } from '../../features/walletSlice';
import MainLayout from '../layouts/Main';
import CreateNewWallet from './CreateNewWallet';

const MyWallet = () => {
  const { currencyList, walletInfo } = useSelector(state => state.wallet);
  const { id, walletId, username, email } = useSelector(
    state => state.user.userInfo
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) navigate('/');
    if (currencyList.length === 0) dispatch(getCurrencyList());
    if (walletId) dispatch(getWalletById(walletId));
  }, [id, navigate, dispatch, currencyList, walletId]);

  if (!walletId)
    return (
      <CreateNewWallet
        currencyList={currencyList}
        userId={id}
      />
    );
  else return <MainLayout>MyWallet</MainLayout>;
};

export default MyWallet;

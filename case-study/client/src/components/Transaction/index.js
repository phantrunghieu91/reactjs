import { useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  getDebtLoanCategories,
  getExpenseCategories,
  getIncomeCategories,
} from '../../features/categoriesSlice';
import { getTransactionByWalletId } from '../../features/transactionSlice';
import MainLayout from '../layouts/Main';
import TransactionList from './TransactionList';

const Transaction = () => {
  const { id: walletId, currency } = useSelector(state => state.wallet.walletInfo);
  const categories = useSelector(state => state.categories);
  const { transactions } = useSelector(state => state.transaction);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDebtLoanCategories());
    dispatch(getExpenseCategories());
    dispatch(getIncomeCategories());
    dispatch(getTransactionByWalletId(walletId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainLayout>
      <Row className='w-100 h-75 d-flex m-0'>
        <Col className='bg-light p-0 rounded-4' xs={6} md={6} xl={6}>
          <Row className='px-5 py-2 m-0 border-bottom'>
            <Col sm={12} className='h-100 d-flex align-items-center justify-content-end p-0'>
              <Button variant='outline-success fw-semibold' type='button'>
                Add new transaction
              </Button>
            </Col>
          </Row>
          <TransactionList
            transactionList={transactions}
            currency={currency}
            categories={categories}
          />
        </Col>
      </Row>
    </MainLayout>
  );
};

export default Transaction;

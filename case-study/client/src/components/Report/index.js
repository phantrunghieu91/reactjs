import MainLayout from '../layouts/Main';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import useDaysInMonth from '../../hooks/useDaysInMonth';
import { getTransactionByWalletId } from '../../features/transactionSlice';
import { Container, Table } from 'react-bootstrap';
import transactionNumberType from '../../hooks/transactionNumberType';
import converDecimal from '../../hooks/convertDecimal';
import transactionColor from '../../hooks/transactionColor';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Report = () => {
  const { walletInfo: wallet } = useSelector(state => state.wallet);
  const { transactions } = useSelector(state => state.transaction);
  const categories = useSelector(state => state.categories);
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOption, setChartOption] = useState({});
  const totalDays = useDaysInMonth(2022, 10);

  const dispatch = useDispatch();

  // Get category info
  const getCategoryInfo = (type, transaction) =>
    categories[type].filter(item => item.id === transaction.categoryId)[0];

  useEffect(() => {
    if (transactions.length === 0) dispatch(getTransactionByWalletId(wallet.id));
    setChartData({
      labels: totalDays,
      datasets: totalDays.map(day => {
        const transactionAtDay = transactions.filter(item => new Date(item.date).getDate() === day);
        if (transactionAtDay.length > 0) {
          return transactionAtDay.map(tran => {
            if (
              tran.type === 'income' ||
              (tran.type === 'debtLoan' && (tran.categoryId === 1 || tran.categoryId === 2))
            )
              return tran.amount;
          });
        } else {
          return 0;
        }
      }),
    });
  }, [wallet.id]);

  const daysHadTransaction = transactions
    .reduce((result, item) => {
      if (result.length === 0) return [new Date(item.date).getDate()];
      else if (!result.includes(new Date(item.date).getDate())) {
        return [...result, new Date(item.date).getDate()];
      } else {
        return result;
      }
    }, [])
    .sort();
  return (
    <MainLayout>
      <Container className='bg-light p-2'></Container>
    </MainLayout>
  );
};

export default Report;

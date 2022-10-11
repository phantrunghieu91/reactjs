import TransactionItem from './TransactionItem';

const TransactionList = ({ transactionList, currency, categories }) => {
  return (
    <>
      {transactionList.map(item => (
        <TransactionItem
          currency={currency}
          transaction={item}
          key={item.id}
          categories={categories}
        />
      ))}
    </>
  );
};

export default TransactionList;

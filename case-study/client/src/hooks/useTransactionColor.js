const useTransactionColor = (type, id) => {
  switch (type) {
    case 'income':
      return 'text-info';
    case 'expense':
      return 'text-danger';
    case 'debtLoan':
      if (id === 1 || id === 2) return 'text-info';
      else return 'text-danger';
    default:
  }
};

export default useTransactionColor;

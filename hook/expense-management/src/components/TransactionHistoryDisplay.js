function TransactionHistoryDisplay(props) {
    return (
        <div className="expense-app__content__history">
            <div className="expense-app__content__history__header">
                <h3 className="expense-app__content__history__header__title">Transaction History</h3>
                <span className='expense-app__content__history__header__transaction-count'>{props.transactions.length < 2 ? `${props.transactions.length} transaction` : `${props.transactions.length} transactions`}</span>
            </div>
            <div className="expense-app__content__history__display">
                <table>
                    <thead>
                        <tr>
                            <th>Transaction</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.transactions.map((ele, index) => {
                                return (
                                    <tr key={`transaction-${index}`}
                                    className={`expense-app__content__history__display--tr-${ele.type}`}
                                    >
                                        <td>{ele.text}</td>
                                        <td>{ele.type}</td>
                                        <td>${ele.amount}</td>
                                        <td>{ele.date}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TransactionHistoryDisplay;
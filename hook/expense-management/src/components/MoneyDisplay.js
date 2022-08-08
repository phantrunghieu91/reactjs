function MoneyDisplay(props) {
    return (
        <div className='expense-app__content__total'>
            <div className="expense-app__content__total__balance">
                <h3 className="expense-app__content__total__balance__label">Balance: </h3>
                <span className="expense-app__content__total__balance__amount">${props.balance.toFixed(2)}</span>
            </div>
            <div className='expense-app__content__total__income-expense'>
                <div className="expense-app__content__total__income-expense__income">
                    <h3 className="expense-app__content__total__income-expense__income__label">income</h3>
                    <span className="expense-app__content__total__income-expense__income__amount">${props.income.toFixed(2)}</span>
                </div>
                <div className="expense-app__content__total__income-expense__expense">
                    <h3 className="expense-app__content__total__income-expense__expense__label">expense</h3>
                    <span className="expense-app__content__total__income-expense__expense__amount">${props.expense.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
}

export default MoneyDisplay;
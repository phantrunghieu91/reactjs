import { useState } from "react";

function MoneyDisplay(props) {
    const [isChanging, setIsChanging] = useState(false);

    const handleSubmitChange = (e) => {
        e.preventDefault();
        setIsChanging(prevState => !prevState);
        if(isChanging) {

        }
    };

    return (
        <div className='expense-app__content__total'>
            <div className="expense-app__content__total__balance">
            <h3 className="expense-app__content__total__balance__label">Your Current Balance: </h3>
                <div className='expense-app__content__total__balance__form'>
                    <span className="expense-app__content__total__balance__form__amount"
                    style={isChanging ? {display: 'none'} : {display: 'inline-block'}}>${props.balance}</span>
                    <input className="expense-app__content__total__balance__form__input"
                        type='text' name='balance' onChange={props.handleBalanceChange} value={props.balance}
                        style={isChanging ? {display: 'inline-block'} : {display: 'none'}}
                        oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"/>
                    <button
                        className="expense-app__content__total__balance__form__change-btn"
                        onClick={handleSubmitChange}
                    >Change</button>
                </div>
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
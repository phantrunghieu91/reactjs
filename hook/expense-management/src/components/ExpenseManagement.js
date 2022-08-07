import { useState } from "react";
import TransactionHistoryDisplay from "./TransactionHistoryDisplay";
import useTransactions from "../hooks/useTransactions";
import AlertBox from "./AlertBox";
const dateInfo = new Date();
let currentDate = `${dateInfo.getFullYear()}-${dateInfo.getMonth() < 10 ? `0${(dateInfo.getMonth() + 1)}` : (dateInfo.getMonth() + 1)}-${dateInfo.getDate() < 9 ? `0${dateInfo.getDate()}` : dateInfo.getDate() }`;
document.title = `Expense Tracker`;

function ExpenseManagement() {
    const [transaction, setTransaction] = useState({
        text: '',
        type: '',
        amount: '',
        date: currentDate
    });

    const [transactions, addNewTransaction] = useTransactions(
        {text: 'Test', type: 'income', amount: 100, date: '2022-08-01'}
    );

    const [isValid, setIsValid] = useState(false);

    const [balance, setBalance] = useState(2100);
    const [income, setIncome] = useState(100);
    const [expense, setExpense] = useState(0);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setTransaction(prevState => {
            return name==='amount' ?
                {...prevState, [name]: +value} :
                {...prevState, [name]: value}
        }, checkValid());
    };

    const checkValid = () => {
        const textRegex = /[A-Za-z0-9]{1,}/;
        const numberRegex = /^[0-9]+(\.){0,1}([0.9]*)/;
        console.log(`text: ${textRegex.test(transaction.text)}`);
        console.log(`amount: ${numberRegex.test(transaction.amount)}`);
        console.log(`type(${transaction.type}): ${(transaction.type === 'income' || transaction.type === 'expense')}`);
        console.log(textRegex.test(transaction.text)
        && (transaction.type === 'income' || transaction.type === 'expense')
        && numberRegex.test(transaction.amount));
        setIsValid(
            textRegex.test(transaction.text)
            && (transaction.type === 'income' || transaction.type === 'expense')
            && numberRegex.test(transaction.amount)
        );
    };

    const handleSubmit = e => {
        checkValid();
        e.preventDefault();
        if(isValid) {
            addNewTransaction(transaction);
            if(transaction.type === 'income') {
                setIncome(transaction.amount);
                setBalance(balance + transaction.amount);
            } else if(transaction.type === 'expense'){
                setExpense(transaction.amount);
                setBalance(balance - transaction.amount);
            }
        } else {
            // Giải quyết alert
        }
    };

    return (
        <div className='expense-app'>
            <h1 className="expense-app__header">Expense Tracker</h1>
            <div className="expense-app__content">
                <div className='expense-app__content__total'>
                    <div className="expense-app__content__total__balance">
                        <span>Your balance: </span> &nbsp;
                        <span className="expense-app__content__total__balance__amount">${balance}</span>
                    </div>
                    <div className='expense-app__content__total__income-expense'>
                        <div className="expense-app__content__total__income-expense__income">
                            <h3 className="expense-app__content__total__income-expense__income__label">income</h3>
                            <span className="expense-app__content__total__income-expense__income__amount">${income}</span>
                        </div>
                        <div className="expense-app__content__total__income-expense__expense">
                            <h3 className="expense-app__content__total__income-expense__expense__label">expense</h3>
                            <span className="expense-app__content__total__income-expense__expense__amount">${expense}</span>
                        </div>
                    </div>
                </div>
                <div className="expense-app__content__add-new-transaction">
                    <h3 className="expense-app__content__add-new-transaction__title">Add new transaction</h3>
                    <div className="expense-app__content__add-new-transaction__form">
                        <div className="expense-app__content__add-new-transaction__form__input-grp">
                            <input className="expense-app__content__add-new-transaction__form__input-grp__transaction-text" 
                                type='text' placeholder="Transaction" name='text' required
                                onChange={handleChange} value={transaction.text}
                            />
                            <select
                                className="expense-app__content__add-new-transaction__form__input-grp__type"
                                name='type' required
                                onChange={handleChange} value={transaction.type}
                            >
                                <option value=''>Transaction type</option>
                                <option value='income'>Income</option>
                                <option value='expense'>Expense</option>
                            </select>
                            <input className="expense-app__content__add-new-transaction__form__input-grp__amount" 
                                type='number' placeholder="Amount" name='amount' required
                                onChange={handleChange} value={transaction.amount}
                            />
                            <input className="expense-app__content__add-new-transaction__form__input-grp__date" 
                                type='date' name='date'
                                onChange={handleChange} value={transaction.date}
                            />
                        </div>
                        <div className="expense-app__content__add-new-transaction__form__button-grp">
                            <button className="expense-app__content__add-new-transaction__form__button-grp__submit"
                                onClick={handleSubmit}
                            >
                                Add transaction
                            </button>
                        </div>
                    </div>
                </div>
                <TransactionHistoryDisplay transactions={transactions}/>
            </div>
        </div>
    );
}

export default ExpenseManagement;
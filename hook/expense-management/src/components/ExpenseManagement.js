import { useState } from "react";
import TransactionHistoryDisplay from "./TransactionHistoryDisplay";
import useTransactions from "../hooks/useTransactions";
import TransactionForm from "./TransactionForm";
import MoneyDisplay from "./MoneyDisplay";

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

    const [alertMessage, setAlertMessage] = useState({
       isAlert: false,
       classModifier: '',
       message: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setTransaction(prevState => {
            return name==='amount' ?
                {...prevState, [name]: +value} :
                {...prevState, [name]: value}
        });
    };

    const handleBalanceChange = (e) => {
        setBalance(e.target.value);
    };

    const checkValid = () => {
        const textRegex = /[A-Za-z0-9]{1,}/;
        const numberRegex = /^[0-9]+(\.){0,1}([0.9]*)/;
        // console.log(`text: ${textRegex.test(transaction.text)}`);
        // console.log(`amount: ${numberRegex.test(transaction.amount)}`);
        // console.log(`type(${transaction.type}): ${(transaction.type === 'income' || transaction.type === 'expense')}`);
        // console.log(textRegex.test(transaction.text)
        // && (transaction.type === 'income' || transaction.type === 'expense')
        // && numberRegex.test(transaction.amount));
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
            setAlertMessage({
                isAlert: false,
                classModifier: '',
                message: ""
            });
            addNewTransaction(transaction);
            if(transaction.type === 'income') {
                setIncome(prevState => prevState + transaction.amount);
                setBalance(balance + transaction.amount);
            } else if(transaction.type === 'expense'){
                setExpense(prevState => prevState + transaction.amount);
                setBalance(balance - transaction.amount);
            }
        } else {
            setAlertMessage({
                isAlert: true,
                classModifier: 'warning',
                message: "Transaction info still missing, please fill it out!"
            });
        }
    };

    return (
        <div className='expense-app'>
            <h1 className="expense-app__header">Expense Tracker</h1>
            <div className="expense-app__content">
                <MoneyDisplay balance={balance} income={income} expense={expense}
                    handleBalanceChange={handleBalanceChange}/>
                <div className="expense-app__content__add-new-transaction">
                    <h3 className="expense-app__content__add-new-transaction__title">Add new transaction</h3>
                    <TransactionForm transaction={transaction}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        checkValid={checkValid}
                        alertMessage={alertMessage}
                    />
                </div>
                <TransactionHistoryDisplay transactions={transactions}/>
            </div>
        </div>
    );
}

export default ExpenseManagement;
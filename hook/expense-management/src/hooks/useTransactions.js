import { useState } from "react";

function useTransactions() {
    const [transactions, setTransactions] = useState([
        {text: 'Test', type: 'income', amount: 100, date: '2022-08-01'}
    ]);

    const addNewTransaction = (transaction) => {
        setTransactions([...transactions, transaction]);
    };

    const deleteTransaction = (transIndex) => {
        setTransactions(() => transactions.filter((ele, index) => index !== transIndex));
    };

    const editTransaction = (transIndex, transaction) => {
        setTransactions(() => {
            return transactions.map((ele, id) => {
                if(id === transIndex) {
                    return ele = transaction;
                } else return ele;
            });
        });
    };

    return [transactions, addNewTransaction, deleteTransaction, editTransaction];
}

export default useTransactions;
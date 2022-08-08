import { useEffect } from "react";

function TransactionForm(props) {
    useEffect(() => {
        props.checkValid();
    });

    return (
        <div className="expense-app__content__add-new-transaction__form">
            <div className="expense-app__content__add-new-transaction__form__input-grp">
                <input className="expense-app__content__add-new-transaction__form__input-grp__transaction-text" 
                    type='text' placeholder="Transaction" name='text' required
                    onChange={props.handleChange} value={props.transaction.text}
                />
                <select
                    className="expense-app__content__add-new-transaction__form__input-grp__type"
                    name='type' required
                    onChange={props.handleChange} value={props.transaction.type}
                >
                    <option value=''>Transaction type</option>
                    <option value='income'>Income</option>
                    <option value='expense'>Expense</option>
                </select>
                <input className="expense-app__content__add-new-transaction__form__input-grp__amount" 
                    type='number' placeholder="Amount" name='amount' required
                    onChange={props.handleChange} value={props.transaction.amount}
                />
                <input className="expense-app__content__add-new-transaction__form__input-grp__date" 
                    type='date' name='date'
                    onChange={props.handleChange} value={props.transaction.date}
                />
            </div>
            <div className={`expense-app__content__add-new-transaction__form__alert-message  ${props.alertMessage.classModifier}`}>
                <p className={`expense-app__content__add-new-transaction__form__alert-message__message`}>{props.alertMessage.isAlert && `${props.alertMessage.message}`}</p>
            </div>
            <div className="expense-app__content__add-new-transaction__form__button-grp">
                <button className="expense-app__content__add-new-transaction__form__button-grp__submit"
                    onClick={props.handleSubmit}
                >
                    Add transaction
                </button>
            </div>
        </div>
    );
}

export default TransactionForm;
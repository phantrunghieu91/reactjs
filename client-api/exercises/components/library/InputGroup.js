import css from '../../styles/library/InputGroup.module.css';

export default function InputGroup(props){
    return (
        <div className={css[`input-group`]}>
            <label htmlFor={props.id}
                className={css[`input-group__label`]}
            >
                <span className={css[`input-group__label__text`]}>{props.label}</span>
                <span className={css[`input-group__label__error`]}>{props.error}</span>
            </label>
            <input 
                id={props.id}
                className={css[`input-group__input`]}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    );
}
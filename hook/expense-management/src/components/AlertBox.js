import '../sccs/alert-box.scss';

function AlertBox(props) {
    let alertBoxClasses = `alert-box__content ${props.classModifier}`;
    return (
        <div className='alert-box'>
            <div className={alertBoxClasses}>
                {props.message};
            </div>
        </div>
    );
}

export default AlertBox;
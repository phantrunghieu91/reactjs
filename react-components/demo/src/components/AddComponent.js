import PropsType from 'prop-types'

function AddComponent(props) {
    return (
        <h2>Sum {props.firstNum} + {props.secondNum} = {props.firstNum + props.secondNum}</h2>
    );
}

AddComponent.propTypes = {
    firstNum: PropsType.number.isRequired,
    secondNum: PropsType.number.isRequired
};

AddComponent.defaultProps = {
    firstNum: 0,
    secondNum: 0
};

export default AddComponent;
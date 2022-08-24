const Result = (props) => (
    <h3
        style={{
            height: '2rem'
        }}
    >{props.bmi !== 0 && `Your BMI is: ${props.bmi.toFixed(2)}%`}</h3>
);

export default Result;
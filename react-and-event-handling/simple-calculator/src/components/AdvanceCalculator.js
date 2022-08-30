import Button from "./Button";
import {useState} from 'react';

const LAYOUT = [
    { name: 'operator', value: '+' },
    { name: 'operator', value: '-' },
    { name: 'operator', value: 'x' },
    { name: 'operator', value: '÷' },
    { name: 'number', value: '7' },
    { name: 'number', value: '8' },
    { name: 'number', value: '9' },
    { name: 'equal', value: '=' },
    { name: 'number', value: '4' },
    { name: 'number', value: '5' },
    { name: 'number', value: '6' },
    { name: 'number', value: '1' },
    { name: 'number', value: '2' },
    { name: 'number', value: '3' },
    { name: 'number', value: '0' },
    { name: 'decimal', value: '.' },
    { name: 'reset', value: 'C' },
];

export default function AdvanceCalculator() {
    const [result, setResult] = useState('0');
    const [tempMemo, setTempMemo] = useState('0');
    const [operator, setOperator] = useState(undefined);

    const handleClick = e => {
        const btnName = e.target.name;
        const btnValue = e.target.value;
        if(btnName === 'number'){
            if(result === '0') {
                setResult(btnValue);
            } else {
                if(tempMemo === '0') setResult(result + btnValue);
                else {
                    setResult(result + btnValue);
                }
            }
        } else if(btnName === 'reset') {
            setResult('0');
            setTempMemo('0');
            setOperator(undefined);
        } else if(btnName === 'operator') {
            if(operator === undefined) {
                setOperator(btnValue);
                setTempMemo(result);
                setResult('0');
            } else {
                setOperator(btnValue);
                if(tempMemo === '0') {
                    setTempMemo(result);
                    setResult('0');
                } else {
                    console.log(operator);
                    calculate(tempMemo, result, operator);
                }
            }
            
        } else if(btnName === 'equal') {
            if(operator) {
                calculate(tempMemo, result, operator);
                setOperator(undefined);
            }
        }
    };

    const calculate = (first, second, operator) => {
        switch(operator) {
            case '+':
                setResult(+first + +second);
                setTempMemo(+first + +second);
                break;
            case '-':
                setResult(+first - +second);
                setTempMemo(+first - +second);
                break;
            case 'x':
                setResult(+first * second);
                setTempMemo(+first * second);
                break;
            case '÷':
                setResult(+first / second);
                setTempMemo(+first / second);
                break;
            default:
        }
    };

    return (
        <div className="advance-calculator">
            <input 
                className="result"
                type='text'
                value={result}
                readOnly
                disabled
            />
            <div className='btn-group'>
                {LAYOUT.map((item, index) => (
                    <Button 
                        key={index}
                        className={item.name}
                        name={item.name}
                        label={item.value}
                        value={item.value}
                        onClick={handleClick}
                    />
                ))}
            </div>
        </div>
    );
}
import { useState } from 'react';
import Result from './Result.js';

export default function BMICaculator() {
    const [bmi, setBmi] = useState(0);
    const [form, setForm] = useState({});

    const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

    const divStyle = {
        padding: '.5rem',
        width: '60%',
        display: 'flex',
        flexFlow: 'column nowrap'
    };

    const inputStyle = {
        padding: '.5rem 1rem',
        fontSize: '1.5rem'
    }

    return (
        <div style={{
                padding: '2rem',
                display: 'flex',
                flexFlow: 'column nowrap',
                width: '60%',
                height: 'fit-content',
                alignItems: 'center',
                backgroundColor: 'lightblue'
            }}>
            <h2>BMI Caculator</h2>
            <form style={{
                width: '80%',
                display: 'flex',
                flexFlow: 'column nowrap',
                alignItems: 'center'
            }}>
                <div
                    style={divStyle}
                >
                    <label htmlFor='height'>Height</label>
                    <input 
                        type='text'
                        id='height'
                        name='height'
                        value={form.height}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                </div>
                <div
                    style={divStyle}
                >
                    <label htmlFor='weight'>Weight</label>
                    <input 
                        type='text'
                        id='weight'
                        name='weight'
                        value={form.weight}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                </div>
                <Result bmi={bmi}/>
                <button 
                    onClick={(e) => {
                        e.preventDefault();
                        setBmi(form.weight / ((form.height / 100) ** 2));
                    }}
                    style={{
                        padding: '.5rem',
                        fontSize: '1.5rem',
                        width: '60%'
                    }}
                >Caculate</button>
            </form>
        </div>
    );
}
import { useState, useEffect } from 'react';

function Timer(){
    const [timer, setTimer] = useState(5);

    useEffect(() => {
        let id = setInterval(() => {timer > 0 && setTimer(timer - 1)}, 1000);
        timer === 0 && alert('Time out!');
        return () => {clearInterval(id)};
    }, [timer]);

    return (
        <div className='timer'>
            <h1 className='timer-display'>Counting down from {timer}</h1>
        </div>
    );
}

export default Timer;
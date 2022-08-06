import { useEffect, useState } from 'react';

function Counter() {
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count < 2 ? `${count} time` : `${count} times`}`;
    });

    return (
        <div className='counter'>
            <p>You clicked {count < 2 ? `${count} time` : `${count} times`}.</p>
            <button onClick={() => {setCount(count + 1)}}>Click me!</button>
        </div>
    );
}

export default Counter;
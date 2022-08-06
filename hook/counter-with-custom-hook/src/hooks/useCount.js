import { useState, useEffect } from 'react';

function useCount() {
    const [count, setCount] = useState(0);

    const increaseAmount = amount => {
        setCount(count + amount);
    };

    useEffect(() => {
        document.title = `Count: ${count}`;
    });

    return [count, increaseAmount];
}

export default useCount;
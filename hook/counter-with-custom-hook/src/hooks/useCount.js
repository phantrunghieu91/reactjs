import { useState } from 'react';

function useCount(amount) {
    const [count, setCount] = useState(0);

    const increaseAmount = () => {
        setCount(count + amount);
    };

    return [count, increaseAmount];
}

export default useCount;
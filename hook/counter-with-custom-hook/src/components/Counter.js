import useCount from "../hooks/useCount";
function Counter() {
    const [count, increaseAmount] = useCount(0);

    return (
        <div className='counter'>
            <button className='counter__add-one'
                onClick={() => increaseAmount(1)}>Add one</button>
            <h1 className='counter__display'>Count: {count}</h1>
            <button className='counter__add-two'
                onClick={() => increaseAmount(2)}>Add two</button>
        </div>
    );
}

export default Counter;
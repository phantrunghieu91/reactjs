import useCount from "../hooks/useCount";

export default function AddTwo() {
    const [count, increase] = useCount(2);

    return (
        <>
            <h1 className='counter__display'>Count 2: {count}</h1>
            <button className='counter__add-two'
                onClick={increase}>Add two</button>
        </>
    );
}
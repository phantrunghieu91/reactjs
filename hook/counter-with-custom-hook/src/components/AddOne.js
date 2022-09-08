import useCount from "../hooks/useCount";

export default function AddOne() {
    const [count, increase] = useCount(1);

    return (
        <>
            <h1 className='counter__display'>Count 1: {count}</h1>
            <button className='counter__add-one'
                onClick={increase}>Add one</button>
        </>
    );
}
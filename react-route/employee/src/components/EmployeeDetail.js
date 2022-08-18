import { useLocation } from 'react-router-dom';

export default function EmployeeDetail () {
    const { state } = useLocation();
    console.log(state);
    return (
        <div className='app__employee-detaul'>
            <h2>Employee Detail</h2>
            <p>Name: {state.employee.name}</p>
            <p>Age: {state.employee.age}</p>
        </div>
    );
}
import { useLocation, useNavigate } from 'react-router-dom';

export default function EmployeeDetail () {
    const { state } = useLocation();
    const navigate = useNavigate();
    return (
        <div className='app__employee-detail'>
            <h2>Employee Detail</h2>
            <p>Name: {state.employee.name}</p>
            <p>Age: {state.employee.age}</p>
            <button className='app__employee-detail__back-btn' onClick={() => navigate(-1)}>Back</button>
        </div>
    );
}
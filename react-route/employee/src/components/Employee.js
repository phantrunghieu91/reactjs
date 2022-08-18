import {useLocation, useNavigate} from 'react-router-dom';

const employees = [
    {
        id: 1,
        name: "Hoa",
        age: 20
    },
    {
        id: 2,
        name: "Khánh",
        age: 25
    },
    {
        id: 3,
        name: "Tú",
        age: 22
    },
];

export default function Employee() {
    const { state } = useLocation();
    const navigate = useNavigate();

    return (
        <div className="app__employee">
            <h3>Welcome, {state.username}!</h3>
            <table className="app__employee__display">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((ele, index) => (
                            <tr key={`employee-${index}`}>
                                <td>{ele.id}</td>
                                <td>{ele.name}</td>
                                <td>{ele.age}</td>
                                <td>
                                    <button onClick={() =>{
                                        navigate(`/employee/${ele.id}`, { state : { employee: ele }})
                                    }}>Detail</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
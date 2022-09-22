import { Main } from "./layouts/Main";
import { useSelector } from "react-redux";
import { useTitle } from "../hooks/useTitle";

export default function Users() {
    useTitle('Users');
    const users = useSelector(state => state.usersReducer.users);
    return (
        <Main>
            <div className="container-fluid">
                <h1>Users</h1>
                <table className="table table-light">
                    <thead>
                        <tr className="table-dark">
                            <th scope='col'>ID</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={index}>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.website}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Main>
    );
}
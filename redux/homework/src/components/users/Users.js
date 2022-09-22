import { Main } from '../layouts/Main';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteUserRequest,
  fetchUserRequest,
} from '../../redux/actions/userAction';

export default function Users() {
  const users = useSelector(state => state.userReducer.users);

  const dispatch = useDispatch();

  const displayUsersTable = () => {
    dispatch(fetchUserRequest());
  };

  const deleteUser = userId => {
    dispatch(deleteUserRequest(userId));
  };

  return (
    <Main>
      <div className='container-fluid'>
        <h1>User List</h1>
        <button
          className='btn btn-info'
          onClick={displayUsersTable}
        >
          Get Users
        </button>
        {users.length > 0 && (
          <table className='table table-light mt-3'>
            <thead>
              <tr className='table-dark'>
                <th scope='col'>ID</th>
                <th scope='col'>Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>Website</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <th scope='row'>{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                  <td>
                    <button
                      className='btn btn-danger'
                      onClick={() => {
                        deleteUser(user.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Main>
  );
}

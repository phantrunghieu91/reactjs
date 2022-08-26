import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import UserLayout from "../../components/users/Layout";
import css from "../../styles/user/Users.module.css";

export default function Users() {
    const [users, setUsers] = useState([]);

    const router = useRouter();

    const client = axios.create({
        baseURL: 'https://my-json-server.typicode.com/codegym-vn/mock-api-users/users'
    });

    const getUsers = async () => {
        return await client.get();
    };

    useEffect(() => {
        getUsers()
            .then(res => {
                setUsers(res.data);
            })
            .catch(err => {
                throw err;
            });
    }, []);

    const deleteUser = (id) => {
        client
            .delete(`/${id}`)
            .then(res => {
                alert("Deleted successful!");
            })
            .catch(err => {
                throw err;
            })
            .finally(() => {
                setUsers(users.filter(user => user.id !== id));
            });
    };

    const handleAddNew = () => {
        router.push('/users/0');
    };

    return (
        <UserLayout 
            title='Users Management'
            handleAddNew = {handleAddNew}
        >
            <table className={css[`display-users`]}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr 
                                key={`user-${user.id}`}
                                className={css[`display-users__user`]}
                            >
                                <td>{user.name}</td>
                                <td className={css[`display-users__user__btn-grp`]}>
                                    <button 
                                        className={css[`display-users__user__btn-grp__edit-btn`]}
                                        onClick={() => router.push(`/users/${user.id}`)}
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        className={css[`display-users__user__btn-grp__delete-btn`]}
                                        onClick={() => deleteUser(user.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </UserLayout>
    );
}
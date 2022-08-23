import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const UserDetails = () => {
    const router = useRouter();
    const { userid } = router.query;

    const isCreate = userid === '0';

    const [user, setUser] = useState({});

    const isObjectEmpty = (obj) => Object.keys(obj).length === 0;

    !isCreate && useEffect(() => {
        if(isObjectEmpty(user)) {
            axios
                .get(`http://localhost:3001/api/users/${userid}`)
                .then(res => {
                    setUser(res.data);
                })
                .catch(error => {
                    throw error;
                });
        }
    });

    const handleChange = (e) => setUser({...user, [e.target.name]:e.target.value});

    const currentDay = () => {
        const timeData = new Date();
        const day = timeData.getDay() < 10 ? `0${timeData.getDay()}` : timeData.getDay();
        const month = timeData.getMonth() < 10 ? `0${timeData.getMonth()}` : timeData.getMonth();
        const year = timeData.getFullYear();
        return `${year}-${month}-${day}`;
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:3001/api/users`, user)
            .then(res => {
                alert(`${isCreate ? "create" : "Edit"} user ${JSON.stringify(res.data)} successfully!!`)
            })
            .catch(err => {
                throw err;
            });
    };

    return (
        <div>
            <Link href='/'>
                <a>Home</a>
            </Link>
            <h2>{isCreate ? `Create new user` : `Edit user ${user.name}`}</h2>
            <form
                onSubmit={handleSubmit}
            >
                <label htmlFor='name'>Name</label>
                <input 
                    type='text'
                    name='name'
                    value={user.name || ""}
                    onChange={handleChange}
                />
                <label htmlFor='dob'>Date of birth</label>
                <input 
                    type='date'
                    name='dob'
                    value={user.dob || ""}
                    onChange={handleChange}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default UserDetails;
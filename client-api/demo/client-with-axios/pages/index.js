import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if(users.length === 0) {
      axios
        .get(`http://localhost:3001/api/users`)
        .then(res => {
          setUsers(res.data);
        })
        .catch(error => {
          throw error;
        });
    }
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Test mocking api</title>
      </Head>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link href={`/`}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href={`/user/0`}>
              <a>Create</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles['container__main']}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 && users.map((ele, index) => 
              <tr key={`user-${index}`}>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>
                  <Link href={`/user/${ele.id}`}>
                    <a>Edit</a>
                  </Link>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

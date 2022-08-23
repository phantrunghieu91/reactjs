import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css';

class Home extends React.Component {
  constructor(){
    super();
    this.state = {
      users: [],
      loading: false
    };
  }

  getUsersWithPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        axios
          .get(`http://localhost:3001/api/users`)
          .then(res => {
            resolve(res);
          })
          .catch(error => {
            reject(error)
          });
        }, 3000);
      });
  };

  getUsersWithAsync = async () => {
    await new Promise(resolve => {
      setTimeout(resolve, 3000);
    });
    return await axios.get(`http://localhost:3001/api/users`);
  };

  componentDidMount = () => {
    this.setState({loading: true});
    if(this.state.users.length === 0) {
      // this.getUsersWithPromise()
      this.getUsersWithAsync()
        .then(res => {
          this.setState({users: res.data});
        })
        .catch(err => {
          throw err;
        })
        .finally(() => {
          this.setState({loading: false});
        });
    }
  };

  render() {
    const { loading, users } = this.state;
    if(loading) return <h2>Loading data....</h2>
    else return (
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
}

export default Home;

// export default function Home() {
//   const [users, setUsers] = useState([]);
//   const [loadding, setLoadding] = useState(false);
  
//   useEffect(() => {
//     setLoadding(true);
//     if(users.length === 0) {
//       getUsersData()
//         .then(res => {
//           setUsers(res.data);
//         })
//         .catch(err => {
//           throw err;
//         })
//         .finally(() => {
//           setLoadding(false);
//         });
//     }
//   });
  
//   const getUsersData = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         axios
//           .get(`http://localhost:3001/api/users`)
//           .then(res => {
//             resolve(res);
//           })
//           .catch(error => {
//             reject(error)
//           });
//         });
//       }, 3000);
//   };

//   if(loadding) return <h2>Loadding data....</h2>
//   else return (
//     <div className={styles.container}>
//       <Head>
//         <title>Test mocking api</title>
//       </Head>
//       <nav className={styles.navbar}>
//         <ul>
//           <li>
//             <Link href={`/`}>
//               <a>Home</a>
//             </Link>
//           </li>
//           <li>
//             <Link href={`/user/0`}>
//               <a>Create</a>
//             </Link>
//           </li>
//         </ul>
//       </nav>
//       <div className={styles['container__main']}>
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.length > 0 && users.map((ele, index) => 
//               <tr key={`user-${index}`}>
//                 <td>{ele.id}</td>
//                 <td>{ele.name}</td>
//                 <td>
//                   <Link href={`/user/${ele.id}`}>
//                     <a>Edit</a>
//                   </Link>
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

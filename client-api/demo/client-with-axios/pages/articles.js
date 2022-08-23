import axios from "axios";
import { Component } from "react";
import Link from 'next/link';

export default class Articles extends Component {
    constructor(){
        super();
        this.state = {
            users: []
        };
    }

    componentDidMount = () => {
        const getUsers = axios.get(`http://localhost:3001/api/users`);
        const getArticles = axios.get(`http://localhost:3001/api/articles`);
        axios
            .all([getUsers, getArticles])
            .then(
                axios.spread((usersRes, articlesRes) => {
                    const responseUsers = usersRes.data.map(user => {
                        return {
                            ...user,
                            article: articlesRes.data.filter(item => {
                                return item.user_id === user.id
                            })
                        };
                    });
                    this.setState({users: responseUsers});
                })
            )
            .catch(error => {
                throw error;
            });
    };

    render(){
        const {users} = this.state;
        return (
            <div>
                <nav>
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
                        <li>
                        <Link href={`/articles`}>
                            <a>Articles</a>
                        </Link>
                        </li>
                    </ul>
                </nav>
                <table>
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Article Number</th>
                    </thead>
                    <tbody>
                        {
                            users.map((ele, index) => (
                                <tr key={`user-${index}`}>
                                    <td>{ele.id}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.article.length}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
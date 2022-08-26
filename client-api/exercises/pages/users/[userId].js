import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import UserLayout from "../../components/users/Layout";
import css from "../../styles/user/UserDetails.module.css";
import InputGroup from "../../components/library/InputGroup";
import ArticlesDisplay from "../../components/users/Articles";

export default function UserDetails() {
    const router = useRouter();
    const { userId } = router.query;
    const userClient = axios.create({
        baseURL: 'https://my-json-server.typicode.com/codegym-vn/mock-api-users/users'
    });
    const articleClient = axios.create({
        baseURL: 'https://my-json-server.typicode.com/codegym-vn/mock-api-articles/articles'
    });

    const [user, setUser] = useState({});
    const [errors, setErrors] = useState({});

    const isCreateNew = userId === '0';
    const isObjectEmpty = (obj) => Object.keys(obj).length === 0;

    const getUserDetails = async () => await userClient.get(`/${userId}`);
    const getArticleInfo = async () => await articleClient.get(`?user_id=${userId}`);

    !isCreateNew && useEffect(() => {
        if(isObjectEmpty) {
            axios
                .all([getUserDetails(), getArticleInfo()])
                .then(axios.spread((userRes, articleRes) => {
                    const userData = {
                        ...userRes.data,
                        articles: articleRes.data
                    };
                    setUser(userData);
                }))
                .catch(err => {
                    throw err;
                });
        }
    }, []);

    const handleChange = e => {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        if(inputName === 'name') {
            if(!user.name){
                setErrors({...errors, [inputName]: 'Required'});
            }
        }
        
        setUser({...user, [inputName]: inputValue});
    };

    const handleSubmit = e => {
        e.preventDefault();
        const isFilled = user.name !== undefined;
        const isError = isFilled && (errors.name);

        if(isError || !isFilled) {
            alert(`Please fill out empty textbox!`);
        } else {
            if(isCreateNew) {
                userClient
                    .post('', user)
                    .then(res => {
                        alert(`Successful create new user: ${JSON.stringify(res.data, null, 2)}`);
                    })
                    .catch(err => {
                        throw err;
                    });
            } else {
                userClient
                    .put(`/${userId}`, {name: user.name})
                    .then(res => {
                        alert(`Successful edit user: ${JSON.stringify(res.data, null, 2)}`);
                    })
                    .catch(err => {
                        throw err;
                    });
            }
            setTimeout(() => {router.push('/users')}, 2000);
        }
    };

    return (
        <UserLayout
            title='User Detail'
            isCreateNew={isCreateNew}
            userName={user.name || undefined}
        >
            <form onSubmit={handleSubmit}
                className={css[`user-form`]}
            >
                <InputGroup 
                    id='name'
                    label='Name'
                    name='name'
                    value={user.name || ''}
                    onChange={handleChange}
                    error={errors.name || ''}
                />
                <button type='submit'>{isCreateNew ? 'Add' : 'Save'}</button>
            </form>
            <ArticlesDisplay 
                articleClient={articleClient}
                userId={userId}
                getArticleInfo={getArticleInfo}
            />
        </UserLayout>
    )
}
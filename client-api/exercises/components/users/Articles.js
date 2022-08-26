import axios from 'axios';
import { useEffect, useState } from 'react';
import css from '../../styles/user/Article.module.css';
import InputGroup from '../library/InputGroup';

const ArticlesDisplay = ({articleClient, userId, getArticleInfo}) => {
    const [articles, setArticles] = useState([]);
    const [article, setArticle] = useState({
        title: undefined,
        user_id: +userId
    });
    const [errors, setErrors] = useState({});

    const [isUpdate, setIsUpdate] = useState({
        state: false,
        id: undefined
    });

    useEffect(() => {
        getArticleInfo()
            .then(res => {
                setArticles(res.data);
            })
            .catch(err => {
                throw err;
            })
    }, []);

    const handleEdit = (e, id) => {
        e.preventDefault();
        setIsUpdate({state: true, id: id});
        setArticle(articles.filter(item => item.id === id)[0]);
      };

    const clearArticle = () => {
        setArticle({...article, title: '', id: undefined});

    };

    const handleCancel = e => {
        e.preventDefault();
        setIsUpdate({state: false, id: undefined});
        clearArticle();
    };

    const handleChange = e => setArticle({...article, [e.target.name]: e.target.value});

    const handleSubmit = e => {
        e.preventDefault();
        if(isUpdate.state) {
            articleClient
                .put(`/${isUpdate.id}`, article)
                .then(res => {
                    setArticles(articles.map(item => {
                        if(item.id === res.data.id) return res.data;
                        else return item;
                    }));
                    clearArticle();
                })
                .catch(err => {
                    throw err;
                })
                .finally(() => {
                    setIsUpdate({state: false, id: undefined})
                    // Change articles data in client cuz can't change in api
                });
        } else {
            articleClient
                .post('', article)
                .then(res => {
                    setArticles([...articles, res.data]);
                    clearArticle();
                })
                .catch(err => {
                    throw err;
                })
        }
    };

    return (
        <div className={css["container"]}>
            <header className={css.header}>
                <h2>Articles</h2>
                <p>{isUpdate.state && `Update article "${articles.filter(ele => ele.id === isUpdate.id)[0].title}" to new name [ID: ${isUpdate.id}]`}</p>
            </header>
            <form className={css[`modify-form`]}>
                <InputGroup 
                    style={{
                        width: '49%'
                    }}
                    id='title'
                    label='Title'
                    name='title'
                    value={article.title || ''}
                    onChange={handleChange}
                    error={errors.title || ''}
                />
                {
                    isUpdate.state 
                    ? <div className={css['form-btn-grp']}>
                        <button className={css[`submit-btn`]}
                            onClick={handleSubmit}
                        >Update</button>
                        <button className={css[`cancel-btn`]}
                            onClick={handleCancel}
                        >Cancel</button>
                    </div>
                    : <div className={css['form-btn-grp']}>
                        <button className={css[`submit-btn`]}
                            onClick={handleSubmit}>Add</button>
                    </div>
                
                }
            </form>
            {!isUpdate.state && <table className={css["display__articles"]}>
                <thead>
                    <tr>
                        <th>Article</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        articles.map(item => (
                            <tr 
                                className={css[`article`]}
                                key={`article-${item.id}`}
                            >
                                <td>{item.title}</td>
                                <td className={css[`btn-grp`]}>
                                    <button 
                                        className={css[`btn-grp__edit-btn`]}
                                        onClick={e => handleEdit(e, item.id)}
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        className={css[`btn-grp__delete-btn`]}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>}
        </div>
    );
};

export default ArticlesDisplay;
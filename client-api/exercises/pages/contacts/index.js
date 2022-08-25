import ContactLayout from "../../components/contact/Layout";
import css from "../../styles/contact/Contacts.module.css";
import axios from 'axios';
import {useRouter} from 'next/router';
import { useEffect, useState } from "react";

export default function Contact() {
    const [contacts, setContacts] = useState([]);

    const router = useRouter();
    const client = axios.create({
        baseURL: 'https://my-json-server.typicode.com/codegym-vn/mock-api-contacts/contacts'
    });

    const handleAddNewContact = () => {
        router.push('/contacts/0');
    };

    const getContacts = async () => {
        return await client.get();
    };

    useEffect(() => {
        getContacts()
            .then(res => {
                setContacts(res.data);
            })
            .catch(err => {
                throw err;
            });
    }, []);

    const deleteContact = id => {
        client
            .delete(`/${id}`)
            .then(res => {
                alert('Delete successful!');
            })
            .catch(err => {
                throw err;
            })
            .finally(() => {
                setContacts(contacts.filter(contact => contact.id !== id));
            });
    };

    return (
        <ContactLayout 
            title='Contacts'
            handleAddNew = {handleAddNewContact}
        >
            <table className={css[`display-contacts`]}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.length > 0 && contacts.map(contact => (
                            <tr
                                key={`contact-${contact.id}`}
                                className={css[`display-contacts__contact`]}
                            >
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phone}</td>
                                <td className={css[`display-contacts__contact__btn-grp`]}>
                                <button 
                                    className={css[`display-contacts__contact__btn-grp__edit-btn`]}
                                    onClick={() => router.push(`/contacts/${contact.id}`)}
                                >
                                    Edit
                                </button>
                                <button 
                                    className={css[`display-contacts__contact__btn-grp__delete-btn`]}
                                    onClick={() => deleteContact(contact.id)}
                                >
                                    Delete
                                </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </ContactLayout>
    );
}
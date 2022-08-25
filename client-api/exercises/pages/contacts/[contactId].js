import axios from 'axios';
import {useRouter} from 'next/router';
import { useEffect, useRef, useState } from 'react';
import ImageUploadInputGroup from '../../components/contact/ImageUploadInputGroup';
import ContactLayout from '../../components/contact/Layout';
import InputGroup from '../../components/library/InputGroup';
import css from '../../styles/contact/ContactDetails.module.css';

export default function ContactDetails () {
    const router = useRouter();
    const {contactId} = router.query;
    const client = axios.create({
        baseURL: 'https://my-json-server.typicode.com/codegym-vn/mock-api-contacts/contacts'
    });

    const isCreateNew = contactId === '0';
    const isObjectEmpty = (obj) => Object.keys(obj).length === 0;

    const [contact, setContact] = useState({});
    const [errors, setErrors] = useState([]);

    // Select file management
    const [selectedFile, setSelectedFile] = useState(null);

    !isCreateNew && useEffect(() => {
        if(isObjectEmpty(contact)){
            getContactDetails()
                .then(res => {
                    setContact(res.data);
                })
                .catch(err => {
                    throw err;
                });
        }
    }, [contact]);

    const getContactDetails = async () => await client.get(`/${contactId}`);

    const handleSubmit = e => {
        e.preventDefault();

        const isFilled = contact.name && contact.phone && contact.email;
        const isError = isFilled && (errors.name || errors.phone || errors.email);

        // Handle upload file
        const fd = new FormData();
        // Create data
        if(selectedFile){
            fd.append('image', selectedFile);
            axios
                .post('https://v2.convertapi.com/upload', fd)
                .then(res => {
                    setContact({...contact, image: res.data.Url})
                })
                .catch(err => {
                    throw err;
                })
        } 

        if(isError || !isFilled) {
            alert(`Please fill out empty textbox!`);
        } else {
            if(isCreateNew) {
                client
                    .post('', contact)
                    .then(res => {
                        alert(`Successful create new contact: ${JSON.stringify(res.data, null, 2)}`);
                    })
                    .catch(err => {
                        throw err;
                    });
            } else {
                client
                    .put(`/${contactId}`, contact)
                    .then(res => {
                        alert(`Successful edit contact: ${JSON.stringify(res.data, null, 2)}`);
                    })
                    .catch(err => {
                        throw err;
                    });
            }
            setTimeout(() => {router.push('/contacts')}, 2000);
        }
    };

    const handleSelectFile = e => {
        console.log(e.target.files[0]);
        setSelectedFile(e.target.files[0]);
    };

    const handleChange = e => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        if(inputName === 'phone') {
            if(!contact.phone){
                setErrors({...errors, [inputName]: 'Required'});
            } else {
                setErrors({...errors, [inputName]: /^([0-9]{10,11})$/.test(inputValue) ? '' : 'Only number, 10-11 numbers!'});
            }
        } else setErrors({...errors, [inputName]: /[A-Za-z0-9\s]{1,}/.test(inputValue) ? '' : 'Required'});

        if(inputName === 'name') {
            if(!contact.name){
                setErrors({...errors, [inputName]: 'Required'});
            }
        }

        setContact({...contact, [inputName]: inputValue});
    };

    return (
        <ContactLayout 
            title='Contact Details'
            isCreateNew={isCreateNew}
            contactName={contact.name || undefined}
        >
            <form onSubmit={handleSubmit}
                className={css[`contact-form`]}
            >
                <ImageUploadInputGroup 
                    isCreateNew={isCreateNew}
                    contactName={contact.name}
                    inputName='image'
                    imageSrc={contact.image}
                    handleSelectFile={handleSelectFile}
                />
                <InputGroup 
                    id='name'
                    label='Name'
                    name='name'
                    value={contact.name || ''}
                    onChange={handleChange}
                    error={errors.name || ''}
                />
                <InputGroup 
                    id='email'
                    label='Email'
                    name='email'
                    value={contact.email || ''}
                    onChange={handleChange}
                    error={errors.email || ''}
                />
                <InputGroup 
                    id='phone'
                    label='Phone'
                    name='phone'
                    value={contact.phone || ''}
                    onChange={handleChange}
                    error={errors.phone || ''}
                />
                <button type='submit'>{isCreateNew ? 'Add' : 'Save'}</button>
            </form>
        </ContactLayout>
    );
}
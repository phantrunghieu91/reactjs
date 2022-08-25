import { useState } from 'react';
import css from '../../styles/contact/FileInput.module.css';

export default function ImageUploadInputGroup(props) {

    const [img, setImg] = useState({});
    const [imgSrc, setImgSrc] = useState('');

    const onFileSelect = (e) => {
        const [file] = e.target.files;
        setImgSrc(URL.createObjectURL(file));
        setImg(file);
    };

    return (
        <div className={css[`avatar-select-container`]}>
            <div className={css[`avatar-select-container__avatar-container`]}>
                <img 
                    className={css[`avatar-select-container__avatar-container__avatar`]}
                    src={imgSrc || props.imageSrc}
                    alt={props.isCreateNew ? 'Avatar' : `${props.contactName}'s avatar`}
                />
            </div>
            <div className={css[`avatar-select-container__function-group`]}>
                <div className={css[`avatar-select-container__function-group__file-input`]}>
                    <label 
                        htmlFor='img-upload'
                        className={css[`avatar-select-container__function-group__file-input__select-img-label`]}
                    >Choose a picture</label>
                    <input 
                        type='file'
                        name={props.inputName}
                        id='img-upload'
                        accept='image/*'
                        className={css[`avatar-select-container__function-group__file-input__select-img`]}
                        onChange={(e) => {
                            props.handleSelectFile(e);
                            onFileSelect(e);
                        }}
                    />
                </div>
                <div className={css[`avatar-select-container__function-group__img-info`]}>
                    <p>File name: {img.name || ''}</p>
                    <p>Size: {img.size || ''} KB</p>
                </div>
            </div>
        </div>
    );
}
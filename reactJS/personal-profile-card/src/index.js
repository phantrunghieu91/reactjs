import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import banner from './imgs/banner.jpg';
import avatar from './imgs/avatar.jpg';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <div className='profile-card'>
    <div className='profile-card__banner-container'>
      <img src={banner}
        className='profile-card__banner-container__banner'
        alt="Banner"/>
    </div>
    <div className='profile-card__avatar-container'>
      <img src={avatar}
        className='profile-card__avatar-container__avatar'
        alt='Avatar'
      />
    </div>
    <div className='profile-card__content'>
      <h3 className='profile-card__content__name'>Kim Rae Jin</h3>
      <p className='profile-card__content__description'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
      <button className='profile-card__content__follow-btn'>Follow</button>
    </div>
  </div>
);

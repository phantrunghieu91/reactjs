import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.querySelector('#root'));

const broswerInfo = navigator.userAgent;

root.render(
  <h1>
    Browser's details: {broswerInfo}
  </h1>
);

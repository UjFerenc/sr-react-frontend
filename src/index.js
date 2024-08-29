import React from 'react';
import ReactDOM from 'react-dom/client';
import env from "react-dotenv";
import "@preact/signals-react/auto";
import 'bootstrap/js/index.esm'
import App from './App';

console.log(localStorage.getItem('user'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


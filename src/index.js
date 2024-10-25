import React from 'react';
import ReactDOM from 'react-dom/client';
import env from "react-dotenv";
import "@preact/signals-react/auto";
import 'bootstrap/js/index.esm';
import global_en from "./translation/en/global.json"

import App from './App';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';

i18n
    .use(initReactI18next)
    .init({
        resources: {en: global_en},        
        lng: "en",
        interpolation:{
            escapeValue: false
        }
    })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


import React from 'react';
import { render } from 'react-dom';
import App from './components/app.jsx'

const appMain = document.getElementById('app');

render(<App name='Virginia'/>, appMain);
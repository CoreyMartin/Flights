import React from 'react';
import ReactDOM from 'react-dom';

import thing from './web/test';
import { app } from './app/constants';
import styles from './app/styles';

console.log(app.name);

ReactDOM.render(
    <div style={styles.container}>
        <h1 style={styles.heading}>{app.name}</h1>
        <p style={styles.text}>{app.welcomeMsg}</p>
    </div>,
    document.getElementById('app')
)
import React from 'react';
import ReactDOM from 'react-dom';

import thing from './web/test';
import { app } from './app/constants';
import styles from './app/styles';

ReactDOM.render(
    <div style={styles.container}>
        <div style={styles.inner}>
            <img src='/img/cloud.png' style={styles.image}/>
            <h1 style={styles.heading}>{app.name}</h1>
            <p style={styles.text}>{app.welcomeMsg}</p>
            <button type="button">{app.startButton}</button>
        </div>
    </div>,
    document.getElementById('app')
)
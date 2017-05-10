import React from 'react';
import ReactDOM from 'react-dom';

import thing from './web/test';
import { app } from './app/constants';
import styles, { webOnly } from './app/styles';

ReactDOM.render(
    <div style={styles.container}>
        <div style={webOnly.bgImg}>
            <div style={styles.inner}>
                <h1 style={styles.heading}>{app.name}</h1>
                <p style={styles.text}>{app.welcomeMsg}</p>
            </div>
        </div>
        <button type="button" style={{...styles.button, ...styles.buttonText}} onClick={()=>alert('hey!!')}>{app.startButton}</button>
    </div>,
    document.getElementById('app')
)
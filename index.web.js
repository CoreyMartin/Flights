import React from 'react';
import ReactDOM from 'react-dom';

import thing from './web/test';
import { app } from './shared/constants';

console.log(app.name);

ReactDOM.render(
    <div>
        <h1>{app.name}</h1>
        <p>{app.welcomeMsg}</p>
    </div>,
    document.getElementById('app')
)
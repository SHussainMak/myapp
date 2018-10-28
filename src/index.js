import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './css/header.css';
import './css/body.css';
import './css/footer.css'
// const express = require("express");
// const app = express();
//
// app.get("/", (req, res) => {
//    res.send("Hello world");
// });
// app.listen(3000, console.log("listening port 3000"));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
const resultsRouter = require('./router/router');
app.use('/calculator', resultsRouter);

// calculation is done below
// function answer() {
//     if (rockThatBody.operatorSign == '+') {
//         rockThatBody.answer = Number(rockThatBody.firstNumbers) + Number(rockThatBody.secondNumbers);
//     } else if (rockThatBody.operatorSign == '-') {
//         rockThatBody.answer = Number(rockThatBody.firstNumbers) - Number(rockThatBody.secondNumbers);
//     } else if (rockThatBody.operatorSign == '*') {
//         rockThatBody.answer = Number(rockThatBody.firstNumbers) * Number(rockThatBody.secondNumbers);
//     } else if (rockThatBody.operatorSign == '/') {
//         rockThatBody.answer = Number(rockThatBody.firstNumbers) / Number(rockThatBody.secondNumbers);
//     }
// }


/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});
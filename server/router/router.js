const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    pool.query('SELECT * FROM "calculator" ORDER BY "id" DESC LIMIT 10;').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/calculation', error);
        res.sendStatus(500);
    });
})

router.post('/', (req, res) => {
    console.log(req.body);
   
    
    pool.query('INSERT INTO "calculator" ("numberOne", "numberTwo", "operator", "result") VALUES ($1, $2, $3, $4);',
     [req.body.numberOne, req.body.numberTwo, req.body.operator, req.body.result])
        .then(() => {
            res.sendStatus(201)
        }).catch((error => {
            res.sendStatus(500);
            console.log('error in post, error: ' + error);
        }))
})
;
module.exports = router;
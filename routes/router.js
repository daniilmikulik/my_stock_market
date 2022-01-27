const express = require('express');
const router = express.Router();
const fs = require('fs');

router.use(express.json())
router.use(express.urlencoded())

let params = require('../data/params.json');
let stocks = require('../data/stocks.json');
let brokers = require('../data/brokers.json');

router.get('/', (req, res) => {
    res.json(stocks);
});

router.get('/stocks', (req, res) => {
    res.json(stocks);
});

router.get('/brokers', (req, res) => {
    res.json(brokers);
});

router.get('/params', (req, res) => {
    res.json(params);
});

router.post('/brokers', (req, res) => {
    console.log(req.body);
    brokers = req.body;
})

router.post('/stocks', (req, res) => {
    console.log(req.body);
    stocks = req.body;
})

router.post('/editSettings', (req, res) => {
    console.log(req.body);
    params = req.body;
})

router.post('/addStock', (req, res) => {
    console.log(req.body);
    stocks.push(req.body);
})

router.post('/addBroker', (req, res) => {
    console.log(req.body);
    brokers.push(req.body);
})

module.exports = router;

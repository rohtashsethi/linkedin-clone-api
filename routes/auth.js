const express = require('express');
const router = express.Router();
const User = require('../services/user');

router.get('/', async function(req, res, next) {
    try {
        res.json({ message: 'ok' });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

router.get('/login', async function(req, res, next) {
    try {
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;

const { Router } = require('express');

const router = Router();

router.get('/signup', (req, res) => res.send('Not Implemented'));

router.get('/login', (req, res) => res.send('Not Implemented'));

router.get('/forgotPassword', (req, res) => res.send('Not Implemented'));

router.get('/verifyAccount', (req, res) => res.send('Not Implemented'));

module.exports = router;
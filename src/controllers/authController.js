const router = require('express').Router();
const authService = require('../services/authService');

router.get('/login', (req, res) =>{
    res.render('auth/login');
});

router.post('/login', (req, res) =>{
    res.redirect('/login');
});

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', (req, res)=> {
    let{username, password, repeatPassowrd} = req.body;
    
    authService.register(username, password, repeatPassowrd);
})

module.exports = router;
const router = require('express').Router();

router.get('/login', (req, res) =>{
    res.render('auth/login');
});

router.post('/login', (req, res) =>{
    res.redirect('/login');
})

module.exports = router;
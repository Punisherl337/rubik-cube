const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('accessory/create');
});

router.post('/create', (req, res) => {
    let accessory = req.body;

    res.redirect('/');
})

module.exports = router;
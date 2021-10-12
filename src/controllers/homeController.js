const express = require('express');
const { cubes } = require('../models/Cube');
const cubeService = require('../services/cubeService')

const router = express.Router();

const home = (req, res) => {

    let cubes = cubeService.getAll();
    res.render('index', { cubes });
}

const about = (req, res) => {
    res.render('about');
}

const search = (req, res) => {
    let { serach, from, to } = req.query;

    let cubes = cubeService.search(serach, from, to);
    res.render('index', { cubes });
}

router.get('/', home);
router.get('/about', about);
router.get('/search', search);

module.exports = router;
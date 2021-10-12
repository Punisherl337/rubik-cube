const express = require('express');
const { cubes } = require('../models/Cube');
const cubeService = require('../services/cubeService')

const router = express.Router();

const home = (req, res) => {

    let cubes = cubeService.getAll();
    res.render('index', { cubes });
}

router.get('/', home);

module.exports = router;
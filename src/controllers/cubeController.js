const express = require('express');

const cubeService = require('../services/cubeService');

const router = express.Router();

const getCreateCubePage = (req, res) => {
    let cubes = cubeService.getAll();

    console.log(cubes);

    res.render('create');
}

const createCube = (req, res) => {
    let { name, description, imageUlr, difficulty } = req.body;

    cubeService.create(name, description, imageUlr, difficulty);

    res.redirect('/cube/create');
}

router.get('/create', getCreateCubePage);
router.post('/create', createCube);

module.exports = router;
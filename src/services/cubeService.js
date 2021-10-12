const Cube = require('../models/Cube');

const getAll = () => Cube.getAll();

const create = (name, description, imageUlr, difficulty) => {
    let cube = new Cube(name, description, imageUlr, difficulty);
    Cube.add(cube);
}

const cubeService = {
    create,
    getAll
}

module.exports = cubeService;
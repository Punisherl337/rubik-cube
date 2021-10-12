const Cube = require('../models/Cube');

const getAll = () => Cube.getAll();

const getOne = (id) => Cube.cubes.find(x => x.id == id);

const create = (name, description, imageUlr, difficulty) => {
    let cube = new Cube(name, description, imageUlr, difficulty);
    Cube.add(cube);
}

const cubeService = {
    create,
    getAll,
    getOne,
}

module.exports = cubeService;
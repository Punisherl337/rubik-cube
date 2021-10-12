const Cube = require('../models/Cube');

const getAll = () => Cube.getAll();

const getOne = (id) => Cube.cubes.find(x => x.id == id);

const create = (name, description, imageUlr, difficulty) => {
    let cube = new Cube(name, description, imageUlr, difficulty);
    Cube.add(cube);
}

const search = (text, from, to) => {
    let result = Cube.cubes;

    if (text) {
        result = result.filter(x => x.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
    }

    if (from) {
        result = result.filter(x => x.difficulty >= from);
    }

    if (to) {
        result = result.filter(x => x.difficulty <= to);
    }

    return result;
};

const cubeService = {
    create,
    getAll,
    getOne,
    search,
}

module.exports = cubeService;
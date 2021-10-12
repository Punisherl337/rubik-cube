const Cube = require('../models/Cube');

const getAll = () => Cube.find({}).lean();

const getOne = (id) => Cube.findById(id);

const create = (name, description, imageUlr, difficulty) => {
    let cube = new Cube({
        name,
        description,
        imageUlr,
        difficulty
    });
    return cube.save();
}

const search = (text, from, to) => {
    let result = getAll();

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
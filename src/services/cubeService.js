const Cube = require('../models/Cube');

const getAll = async() => Cube.find({}).lean();

const getOne = (id) => Cube.findById(id).lean();

const create = (name, description, imageUrl, difficulty) => {
    let cube = new Cube({
        name,
        description,
        imageUrl,
        difficulty
    });
    return Cube.create(cube);
}

const search = async(text, from, to) => {
    let result = await getAll();

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
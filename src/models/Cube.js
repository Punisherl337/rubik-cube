const uniqid = require('uniqid');
class Cube {
    static cubes = [{
        name: 'asdas',
        description: 'dasd',
        imageUrl: 'https://assets.entrepreneur.com/content/3x2/2000/20150327221922-success-winning-inspirational.jpeg',
        difficulty: '3'
    }];

    constructor(name, description, imageUrl, difficulty) {
        this.id = uniqId();
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficulty = difficulty;
    };

    static getAll() {
        return Cube.cubes.slice();
    };

    static add(cube) {
        Cube.cubes.push(cube);
    }
}

module.exports = Cube;
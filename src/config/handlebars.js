const handlebars = require('express-handlebars');
const path = require('path');

const initHandlebars = (app) => {
    //views setup hbs
    app.set('views', path.resolve(__dirname, '../views'));

    //setup hbs
    app.engine('hbs', handlebars({
        extname: 'hbs'
    }));
    app.set('view engine', 'hbs')
}

module.exports = initHandlebars;
const Sequelize = require('sequelize');
// import {Op} from 'sequelize';
const merge = require('deepmerge');

const selectA = {
    where: {
        text: "something"
    }
};

const selectB = {
    where: {
        date_from: {
            [Sequelize.Op.lt]: Sequelize.literal('NOW()')
        }
    }
};

// let merged = Object.assign({}, selectA, selectB);
let merged = merge(selectA, selectB);

console.log(merged);
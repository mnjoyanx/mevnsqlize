
const Sequelize  = require('sequelize')
module.exports = new Sequelize('mevnsqlize', 'root', '998999', {
    host: 'localhost',
    dialect: 'postgres',
    operatorAliases: false
})
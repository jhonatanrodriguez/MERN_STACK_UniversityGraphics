const posicionService = require('./posicionService');

function getPos(posicion, done) {
    posicionService.getPos(posicion, done)
}

function getPosTopTen(posicion, getCountry, done) {
    posicionService.getPosTopTen(posicion, getCountry, done)
}

function getPosTopTenById(posicion, posID, done) {
    posicionService.getPosTopTenById(posicion, posID, done)
}

module.exports = { getPos, getPosTopTen, getPosTopTenById }
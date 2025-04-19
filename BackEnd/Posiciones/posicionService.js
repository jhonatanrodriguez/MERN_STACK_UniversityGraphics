const posicionDAO = require('./posicionDAO');

function getPos(posicion, done) {
    posicionDAO.getPos(posicion, done)
}
function getPosTopTen(posicion, getCountry, done) {
    posicionDAO.getPosTopTen(posicion, getCountry, done)
}
function getPosTopTenById(posicion, posID, done) {
    posicionDAO.getPosTopTenById(posicion, posID, done)
}

module.exports = { getPos, getPosTopTen, getPosTopTenById }
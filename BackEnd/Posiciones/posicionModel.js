const mongoose = require('mongoose');
const PosicionSchema = mongoose.Schema({
    posID: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    domains: {
        type: Array,
        require: true
    },
    web_pages: {
        type: Array,
        require: true
    },
    country: {
        type: String,
        require: true
    },
    alpha_two_code: {
        type: String,
        require: true
    },
    state_province: {
        type: String,
        require: true
    }
});
const Posicion = mongoose.model('posicion', PosicionSchema)
module.exports = Posicion;


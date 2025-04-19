const mongoose = require('mongoose');
require('../dbConfig/dbFile');
async function getPos(posicion, done) {
    const data = await posicion.aggregate([
        {
            $sortByCount: "$country"
        },
        {
            $limit: 15
        },
    ]);
    done(undefined, data)
}
// async function getPosTopTen(posicion, done) {
//     const data = await posicion.aggregate([
//         {
//             $group: {
//                 _id: {pais:"$country", universidad:"$name"},
//                 // total: {$sum:1} 
//             }
//         },
//     ]);
//     done(undefined, data)
// }
async function getPosTopTen(posicion, getCountry, done) {
    const data = await posicion.find(
        {
            country: getCountry
        },
        {
            _id: 0,
            name: 1,
            country: 1,
            domains: 1,
            web_pages: 1,
            alpha_two_code: 1,
        }
    ).limit(10);
    done(undefined, data)
}
async function getPosTopTenById(posicion, posID, done) {
    const data = await posicion.findById(posID);
    done(undefined, data)
}
module.exports = { getPos, getPosTopTen, getPosTopTenById }
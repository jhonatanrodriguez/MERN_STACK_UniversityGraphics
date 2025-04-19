const express = require('express');
const router = express.Router();
const posicionController = require('./posicionController');
const Posicion = require('./posicionModel');

router.get("/get", async(req, res)=>{
    try {
        posicionController.getPos(Posicion, (err, result)=>{
            if (err) {
                res.status(400).send(err)
            } else {
                res.status(200).send(result)
            }
        } )
    } catch (err) {
        res.status(500).send(err, 'errores');
    }
} );
router.get("/buscar/:Pais", async(req, res)=>{
    try {
        const getCountry = req.params.Pais;
        posicionController.getPosTopTen(Posicion, getCountry, (err, result)=>{
            if (err) {
                res.status(400).send(err)
            } else {
                res.status(200).send(result)
            }
        } )
    } catch (err) {
        res.status(500).send(err, 'errores');
    }
} );
router.get("/getTop/:id", async(req, res)=>{
    try {
        const posID = req.params.id
        posicionController.getPosTopTenById(Posicion, posID, (err, result)=>{
            if (err) {
                res.status(400).send(err)
            } else {
                res.status(200).send(result)
            }
        } )
    } catch (err) {
        res.status(500).send(err, 'errores');
    }
} );
module.exports = router;
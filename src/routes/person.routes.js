const express = require('express');
const { model } = require('mongoose');
const person_model = require('../models/person.model');
const person_routes = express.Router()
/*HTTP requests, in total we will work with 5:
    GET: listar, no recibe parametro
    POST: crear un  nuevo registro
    ------------------------------------------------------
    GET{id}: ver informacion en detalle, recibe como parametro el id
    PUT{id}: actualizar un registro existente, recibe como parametro el id
    DELETE{id}: eliminar un registro existente, recibe como parametro el id
*/
person_routes.get('/', (req, res)=>{
    person_model.find()
        .then((data) => {res.json(data)})
        .catch((err) => res.json(err));
});
person_routes.post('/person', (req, res)=>{
    const new_person = person_model(req.body);
    new_person.save()
        .then((data) => {res.json(data)})
        .catch((err) => res.json(err));
});
person_routes.get('/:personId', (req, res)=>{})
person_routes.put('/:personId', (req, res)=>{})
person_routes.delete('/:personId', (req, res)=>{})

model.exports = person_routes;
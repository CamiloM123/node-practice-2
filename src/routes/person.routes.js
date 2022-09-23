const express = require("express");
const person_model = require("../models/person.model");
const person_routes = express.Router();

/* HTTP requests, in total we will work with 5:
    GET: listar, no recibe parametro
    POST: crear un  nuevo registro
    ------------------------------------------------------
    GET{id}: ver informacion en detalle, recibe como parametro el id
    PUT{id}: actualizar un registro existente, recibe como parametro el id
    DELETE{id}: eliminar un registro existente, recibe como parametro el id
*/

person_routes.get("/", (req, res) => {
  person_model
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.json({ message: err }));
});
person_routes.post("/person", (req, res) => {
  const new_person = person_model(req.body);
  new_person
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.json({ message: err }));
});

/*GET{id}: ver informacion en detalle, recibe como parametro el id*/
person_routes.get("/:personId", (req, res) => {
  const { personId } = req.params;
  person_model
    .findById(personId)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

/*PUT{id}: actualizar un registro existente, recibe como parametro el id*/
person_routes.put("/:personId", (req, res) => {
  const { personId } = req.params;
  /*Todos los campos del modelo conforman el cuerpo requerido */
  const { username, lastname, age, email } = req.body;
  /*updateOne es una funcion que recibe dos parametros: el id y el cuerpo de la persona */
  person_model
    .updateOne({ _id: personId }, { $set: { username, lastname, age, email } })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

person_routes.delete("/:personId", (req, res) => {
  const { personId } = req.params;
  person_model
    .deleteOne({ _id: personId })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

module.exports = person_routes;
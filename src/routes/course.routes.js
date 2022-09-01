const express = require('express');
const { model } = require('mongoose');
const course_model = require('../models/course.model');
const course_routes = express.Router()

person_routes.get('/', (req, res)=>{
    course_model.find()
        .then((data) => {res.json(data)})
        .catch((err) => res.json(err));
})
person_routes.post('/course', (req, res)=>{
    const new_course = course_model(req.body);
    new_course.save()
        .then((data) => {res.json(data)})
        .catch((err) => res.json(err))
})
person_routes.get('/:courseId', (req, res)=>{})
person_routes.put('/:courseId', (req, res)=>{})
person_routes.delete('/:courseId', (req, res)=>{})

model.exports = person_routes;
const mongoose = require('mongoose');
const courseSchema = mongoose.Schema({
    course_name:{type: String, require: true},
    course_code:{type: String, require: true, unique: true},
    amount_credits:{type: Number, require: true},
    amount_hours:{type: Number, require: true}
});

module.exports = mongoose.model('CourseCollection', courseSchema);
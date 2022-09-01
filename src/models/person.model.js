const mongoose = require('mongoose');
const personSchema = mongoose.Schema({
    username:{type: String, require: true},
    lastname:{type: String, require: true},
    age:{type: Number, require: true},
    email:{type: String, require: true, unique: true}
});
module.exports = mongoose.model('PersonCollection', personSchema);
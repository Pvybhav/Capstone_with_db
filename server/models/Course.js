var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CourseSchema = new Schema({
    title: String,
    price: Number,
    instock: Boolean,
    photo: String,
});
module.exports = mongoose.model('Course', CourseSchema);
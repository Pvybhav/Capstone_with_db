var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CourseSchema = new Schema({
    Name: {
        type: String,
        default: ''
    },
    Price: {
        type: Number,
        default: 0
    },
    Category: {
        type: String,
        default: ''
    },
    Description: {
        type: String,
        default: ''
    },
});
module.exports = mongoose.model('Course', CourseSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const candidateSchema = new Schema(
    {
        name: { type: String, required: true},
        dob: {type: String, required: true},
        gender: {type: String, required: true},
        age: {type: String, required: true},
        email: {type: String},
        locale: {type: String, required: true}
    }
);

module.exports = mongoose.model('Candidates', candidateSchema);
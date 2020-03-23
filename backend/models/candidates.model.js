const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const candidateSchema = new Schema(
    {
        name: { type: String, required: true},
        dob: {type: Date, required: true},
        age: {tyep: Integer, required: true},
        email: {type: String},
        locale: {type: String, required: true}
    }
);

module.exports = mongoose.model('Candidates', candidateSchema);
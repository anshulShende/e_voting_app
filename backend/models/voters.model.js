const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voterSchema = new Schema(
    {
        name: { type: String, required: true},
        dob: {type: Date, required: true},
        age: {tyep: Integer, required: true},
        email: {type: String},
        aadharId: {type: String},
        panId: {type: String},
        locale: {type: String, required: true},
        localeId: {type: Integer, required: true},
        reqLocale: {type: String},
        reqLocaleId: {type: Integer},
        password: {type: String, required: password}
    }
);

module.exports = mongoose.model('Voters', voterSchema);
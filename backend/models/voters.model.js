const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voterSchema = new Schema(
    {
        name: { type: String, required: true},
        dob: {type: String, required: true},
        age: {type: String, required: true},
        email: {type: String},
        aadharId: {type: String},
        panId: {type: String},
        locale: {type: String, required: true},
        localeId: {type: String, required: true},
        reqLocale: {type: String},
        reqLocaleId: {type: String},
        password: {type: String, required: true}
    }
);

module.exports = mongoose.model('Voters', voterSchema);
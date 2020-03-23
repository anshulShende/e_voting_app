const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema(
    {
        name: { type: String, required: true},
        locale: {type: String, required: true},
        localeId: {type: Integer, required: true},
        password: {type: String, required: true}
    }
);

module.exports = mongoose.model('Admin', adminSchema);
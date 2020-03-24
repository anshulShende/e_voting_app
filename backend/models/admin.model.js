const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema(
    {
        name: { type: String, required: true},
        locale: {type: String, required: true},
        localeId: {type: String, required: true},
        password: {type: String, required: true}
    }
);

module.exports = mongoose.model('Admin', adminSchema);
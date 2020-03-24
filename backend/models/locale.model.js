const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const localeSchema = new Schema(
    {
        locale: {type: String, required: true},
        localeId: {type: String, required: true},
        localeIdName: {type: String, required: true}
    }
);

module.exports = mongoose.model('Locale', localeSchema);
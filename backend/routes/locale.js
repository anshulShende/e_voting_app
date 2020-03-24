const router = require('express').Router();
let Locale = require('../models/locale.model');

router.route('/').get( (req,res) => {
    Locale.find()
    .then(locale => res.json(locale))
    .catch(err => res.status(400).json('Error '+err));
});

router.route('/add').post( (req,res) => {
    const locale = req.body.locale;
    const localeId = req.body.localeId;
    const localeIdName = req.body.localeIdName;

    const newLocale = new Locale({
        locale,
        localeId,
        localeIdName
    });

    newLocale.save()
    .then( () => res.json("New Locale Added"))
    .then( err => res.status(404).json('Error '+ err));
});

module.exports = router;
const router = require('express').Router();
let admin = require('../models/admin.model');

router.route('/').get((req,res) => {
    admin.find()
    .then(admin => res.json(admin))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const locale = req.body.locale;
    const localeId = req.body.localeId;
    const password = req.body.password;

    const newAdmin = new admin({
      name,
      locale,
      localeId,
      password
    });
  
    newAdmin.save()
    .then(() => res.json('New Admin added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:locale/:localeId').get((req, res) => {
    admin.find({ locale: req.params.locale, localeId: req.params.localeId })
      .then(admin => res.json(admin))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;
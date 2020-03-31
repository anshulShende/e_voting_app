const router = require('express').Router();
let Voters = require('../models/voters.model');

router.route('/').get((req, res) => {
    Voters.find()
      .then(voters => res.json(voters))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/add').post((req, res) => {
    const name = req.body.name;
    const dob = (req.body.dob);
    const gender = req.body.gender;
    const age = req.body.age;
    const email = req.body.email;
    const aadharId = req.body.aadharId;
    const panId = req.body.panId;
    const locale = req.body.locale;
    const localeId = req.body.localeId;
    const reqLocale = req.body.reqLocale;
    const reqLocaleId = req.body.reqLocaleId;
    const password = req.body.password;

    const newVoter = new Voters({
      name,
      dob,
      gender,
      age,
      email,
      aadharId,
      panId,
      locale,
      localeId,
      reqLocale,
      reqLocaleId,
      password
    });
  
    newVoter.save()
    .then(() => res.json('New Voter added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:locale').get((req, res) => {
    Voters.find({ locale: req.params.locale })
      .then(voters => res.json(voters))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:name/:password').get((req, res) => {
    Voters.find({ name: req.params.name, password: req.params.password })
      .then(voters => res.json(voters))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  module.exports = router;


 
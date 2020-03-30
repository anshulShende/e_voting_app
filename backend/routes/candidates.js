const router = require('express').Router();
let candidates = require('../models/candidates.model');

router.route('/').get( (req,res) => {
    candidates.find()
    .then(admin => res.json(admin))
    .catch(err => res.status(400).json('Error '+ err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const dob = (req.body.dob);
    const gender = req.body.gender;
    const age = req.body.age;
    const email = req.body.email;
    const locale = req.body.locale;
    const partyName = req.body.partyName;

    const newCandidate = new candidates({
      name,
      dob,
      gender,
      age,
      email,
      locale,
      partyName
    });
  
    newCandidate.save()
    .then(() => res.json('New Candidate added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:locale').get( (req,res) => {
    candidates.find({ locale: req.params.locale})
    .then( candidates => res.json(candidates))
    .catch( err => res.status(400).json('Error '+ err));
  });

  module.exports = router;
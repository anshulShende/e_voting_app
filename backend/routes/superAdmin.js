const router = require('express').Router();
let superAdmin = require('../models/superAdmin.model');

router.route('/').get( (req,res) => {
    superAdmin.find()
    .then( superAdmin => res.json(superAdmin))
    .catch( err => res.status(400).json('Error '+ err))
})

router.route('/add').post( (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    const newSuperAdmin = new superAdmin({
        username,
        password
    });

    newSuperAdmin.save()
    .then( () => res.json(" New Super Admin Added"))
    .catch(err => res.status(400).json(' Error '+err));
})

router.route('/:username/:password').get( (req,res) => {
    superAdmin.find( { username: req.params.username, password: req.params.password })
    .then( (superAdmin) => res.json(superAdmin))
    .catch(err => res.status(400).json('Error '+ err));
})

module.exports = router;
var express = require('express');
var router = express.Router();
const loginController = require('../controllers').login
const { check , validationResult } = require('express-validator')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

exports.validate = [
  check('email_id').isEmail().withMessage('must be a valid email'),
  check('password').isLength({ min: 4 }).withMessage('passwd 4 chars long!'),
];

router.get('/', function(req, res){
  // res.send('GET route on things.');
   res.render('sample' , {message : 'GET route on things.'} )
});

router.get('/login', this.validate, loginController.validateUser);

router.post('/', function(req, res){
   res.send('POST route on things.');
});

//export this router to use in our index.js
module.exports = router;
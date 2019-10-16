const Profile = require('../models').Profile
const { check , validationResult } = require('express-validator')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    validateUser (req,res) {
        
        let email = req.query.email_id.toLowerCase(); 
        let password = req.query.password;  

        var errors = validationResult(req);

        console.log(errors.array()[0])
        if (errors.array()[0] !== undefined) {
            res.status(302).send({msg: "validation_error", validationerrors:errors.array() }); 
        } else {
            Profile
            .findOne({ 
                 attributes: ['ProfileID','Fullname', 'Username', 'Email','Gender','PhoneNum','Address'], 
                 // attributes: ['ProfileID','Fullname'],
                 where: { 
                    [Op.and]: [{Email:email} , {Password: password} , {StatusID : 1}] 
                    // Email : email,
                    // Password: password,  
                    // StatusID : 1
                 } 
             })
             .then((user) => {   
                // console.log(user) 
                var msg = {};
                msg.text = "Loggedin Successfully";
                msg.status = "Success";
                // res.json({ users : user, alert: msg })
                res.status(200).send({msg_data : msg , users : user})

            }).catch((error) => { res.status(400).send(error) });
        }
    }
}
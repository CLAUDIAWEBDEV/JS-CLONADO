const { body } = require('express-validator');

function createRegisterValidator() {
    return [
        body("username").isLength({min:4, max:170}),
        body("email").isEmail(),
        body("password").isLength({min:4, max:40}),  
    ];
}
    
module.exports = {
    createRegisterValidator,
};
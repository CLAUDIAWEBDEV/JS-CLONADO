const { body } = require('express-validator');

function createClassValidator() {
    return [
        body("name").isLength({min:4, max:170}),
        body("course").isInt(),
        body("vimeoid").isInt(),   
    ];
}
    
module.exports = {
    createClassValidator,
}
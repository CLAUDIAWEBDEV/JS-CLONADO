//para manejar la validacion de los cursos
const { body } = require('express-validator');


function createCourseValidator () {
return [
        body("title").isLength({ min: 5, max: 170 }),
        body("description").isLength({ min: 5, max: 200 }),
        body("level").isIn(["beginner", "intermediate", "advanced"]),
];
}

module.exports = {
    createCourseValidator,
};
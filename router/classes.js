const { Router } = require("express");
const courses = require("./courses");
const { createClassValidator } = require("../validators/class");
const { createClassHandler } = require("../handlers/class");

const router = Router();

router
    .route("/class/create")
    .get(async (req, res) => {
        const courses = await req.client.course.findMany();
        const errors = req.flash("errors");
        /* para que me pase en la consola todos los cursos y saber si esta funcionando
         console.log({
          courses,  
         });*/
        res.render("classes/create", {
            courses,
            errors,
            pathName: "createClass",
        });
    })
    .post(createClassValidator(), createClassHandler);



module.exports = {
    classesRouter: router,
};  
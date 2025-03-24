const { Router } = require("express");
const { createCourseValidator } = require("../validators/course");
const { createCourseHandler } = require("../handlers/course");
const classes = require("./classes");
const router = Router();


//muestra create / para que conecte con create.edge
router
    .route("/course/create")
    .get((req, res) => {
        const errors = req.flash("errors");
        res.render("courses/create", {
            errors,
            pathName: "createCourse",
        });
    })
    .post(createCourseValidator(), createCourseHandler);


router.get("/course/:id", async (req, res) => {
    console.log({
        currentRoute: parseInt(req.params.id)
    });
    const foundCourse = await req.client.course.findUnique({
        where: {
            id: parseInt(req.params.id),
        },
        include: {  
            classes: {},
        },
    });
    console.log("=>", foundCourse);
    res.render("courses/show", {
        course: foundCourse
    }); 
});


router.get("/course/:courseId/:classId", async (req, res) => {
    const foundCourse = await req.client.course.findUnique({
        where: {
            id: parseInt(req.params.courseId),
        },
        include: {
            classes: {},
        },
    });
    res.render("courses/show", {
        course: foundCourse,
        currentClass: foundCourse.classes.find(courseClass => courseClass.id === parseInt(req.params.classId)),
    }); 
});

//exportar el archivo
module.exports = {
    coursesRouter: router,
};
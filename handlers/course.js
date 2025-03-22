const { validationResult } = require("express-validator");
//agrego function create...
async function createCourseHandler (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors.array());    
        req.flash("errors", ["Validation Failed"]);
        return res.redirect("/course/create");
    }
    //manejador de error try: para que si se repite titulo me vuelva a recargar la pagina create
    try {
        //console.log(req.body);
        const response = await req.client.course.create({
            data: req.body,
        });
        // console.log(response);
        //para que muestre en la pgina principal sin hacer el resto
        res.redirect("/");
    } catch (error) {
        if (error.code === "P2002") {
            console.log("Unique Failed");
            req.flash("errors", ["Courses with the information already exists"]);
        } else {
            req.flash("errors", ["Creation Failed"]);
        }
        res.redirect("/course/create");
    }
}

module.exports = {
    createCourseHandler,
};
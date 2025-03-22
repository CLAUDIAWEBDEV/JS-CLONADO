const { validationResult } = require("express-validator");

async function createClassHandler(req, res) {
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.array());    
            req.flash("errors", ["Validation Failed"]);
            return res.redirect("/class/create");
        }
        //manejador de error try: para que si se repite titulo me vuelva a recargar la pagina create
        try {
            const createdClass = await req.client.class.create({
                data: {
                    name: req.body.name,
                    vimeoId: parseInt(req.body.vimeoid),
                    courses: {
                        connect: {
                            id: parseInt(req.body.course),
                        },
                    },
                },
            });
            res.redirect("/");
        } catch (error) {
            if (error.code === "P2002") {
                console.log("Unique Failed");
                req.flash("errors", ["Class with the information already exists"]);
            } else {
                req.flash("errors", ["Creation Failed"]);
            }
            res.redirect("/class/create");
        }
}

module.exports = {
    createClassHandler,
}
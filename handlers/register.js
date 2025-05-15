const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

async function registerUserHandler(req, res) {
    const errors = validationResult(req);
    
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
        if (!errors.isEmpty()) {
            console.log(errors.array());    
            req.flash("errors", ["Validation Failed"]);
            return res.redirect("/register");
        }
        //manejador de error try: para que si se repite titulo me vuelva a recargar la pagina create
        try {
            const user = await req.client.user.create({
                data: {
                    username,
                    email,
                    password: hashedPassword,
                },
            });
            if (error.code === "P2002") {
                console.log("Unique Failed");
                req.flash("errors", ["User already exists"]);
            } else {
                req.flash("errors", ["Creation Failed"]);
            }
            res.redirect("/");
        } catch (error) {
            console.log(error);
        }
}

module.exports = {
    registerUserHandler,
};
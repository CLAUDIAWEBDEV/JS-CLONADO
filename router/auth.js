const passport = require("passport")
const bcrypt = require("bcrypt");
const { Router } = require("express");
const { createRegisterValidator } = require("../validators/register");
const { registerUserHandler } = require("../handlers/register");
const router = Router();

router
.route("/register")
.get((req, res) => {
    const errors = req.flash("errors");
    res.render("auth/register", {
           errors,
        });
})
    .post(createRegisterValidator(), registerUserHandler);

    router
    .route("/login").get((req, res) => {
        res.render("auth/login");
    })
    .post (passport.authenticate("local"), (req, res) => {
console.log(req.user);
res.redirect("/");
    });
    
    router.get("/logout", (req, res, next) => {
        req.logOut((error) => {
            if(error) {
                return next(error);
            };
            res.redirect("/");
        });
    });


module.exports = {
    authRouter: router,
};
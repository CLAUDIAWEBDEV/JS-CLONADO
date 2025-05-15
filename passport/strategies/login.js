const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();


const localStrategy = new LocalStrategy({
    usernameField: "email",
},
  async  (email, password, done) => {
try {
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });
    if(!user) {
       //No existe un usuario  
        return done(null, false, {message: "User does not exist"});
    }
//Existe un usuario
const passwordMatch = bcrypt.compare(password, user.password);
if(!passwordMatch) {
    return done(null, false, {message: "Incorrect information"});
}

//la informacion es correcta
return done(null, user);
} catch (error) {
    return done(err);
}
    }
);

module.exports = {
    localStrategy,
};
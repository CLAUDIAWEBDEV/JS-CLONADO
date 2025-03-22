
const session = require ("express-session");

function initSession () {
  return  session({
    secret: "mysecretkey",
    saveUninitialized: false,
    resave: false,
});
}   

module.exports ={
    initSession,
};
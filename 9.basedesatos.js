//IMPORTS:IMPORTACIONES -----------------------------------------------------------------
const express = require("express");
const path = require("path");
const { PrismaClient } = require("prisma/prisma-client");
//enviar datos al index
const bodyParser = require("body-parser")
const engine = require('express-edge');
const flash = require ("connect-flash")
const {logger} = require ("./middlewares/logger")
const {prismaClient} = require ("./middlewares/prisma-client")
const {initSession} = require ("./middlewares/init-session")
//IMPORT ROUTERS
const {coursesRouter} = require ("./router/courses");
const {mainRouter} = require ("./router/index")
const {classesRouter} = require ("./router/classes")

//CREATE APP
const app = express();

//CREATE PRISMA CLIENT
const client = new PrismaClient();


//SETTINGS:CONFIGURACION  -----------------------------------------------------------------------------
const port = 1100;
app.set("views", path.join(__dirname, "views"));


//MIDDLEWARES:INTERMEDIO---------------------------------------------------------------------------
//enviar datos a edge, true paso los dastos commo objetos
app.use(bodyParser.urlencoded({ extended: true }));
app.use(engine);
app.use(express.static("public"));
app.use(logger);


//DATA:DATOS ------------------------------------------------------   
/*const courses = [
    {
        title: "Desarrollo web con javascript",
        description: "Full stack desde cero"
    },
    {
        title: "HTML y CSS desde cero",
        description: "HTML y CSS desde cero"
    },
    {
        title: "VueJS desde cero",
        description: "Framework moderno de JS"
    }
]*/

//CREO UN MIDDLEWAY : para que el prisma funcione en cualquier peticion - va antes de cualquier peticion para que se ejecute esa variable

app.use (prismaClient(client));

//crear app.use para session
app.use (initSession());

//configurar flash mediante middleware
app.use(flash());

//ROUTES -------------------------------------------------------------------------
//router
app.use(coursesRouter);
app.use(mainRouter);
app.use(classesRouter);






app.listen(port, () => {
    console.log(`App running on port ${port}`);
});









//para usar lo que tengo en la base de datos y no lo que esta en este js
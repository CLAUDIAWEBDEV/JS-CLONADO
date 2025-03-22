//INTRODUCIENDO MOTOR DE PLANILLAS


//IMPORTS:IMPORTACIONES -----------------------------------------------------------------
const express = require ("express");
const path = require ("path");
const app = express();
//PEGO
const engine = require('express-edge');

//SETTINGS:CONFIGURACION  -----------------------------------------------------------------------------
const port = 1000;

//CREAMOS UN CURSO EN UNA CONSTANTE , DATOS DEL CURSO EN UN  ARRAYS
//QUISIERA QUE ESTOS DATOS DE COURSES TENGAN ACCESO AL HTML :----- : ESO NO SE PUEDE 
//CREAREMOS UN MOTOR DE PLANTILLA : 
//ABRO LA PAGINA : https://github.com/ecrmnn/express-edge         Y SIGO LOS PASOS
//PRIMERO : instalamos (npm install express-edge --save) en el terminal
//SEGUNDO : Añado todo lo que dice //PEGO
//CAMBIO EL index.html a index.edge       

 //PEGO
app.set("views", path.join(__dirname,"views"));


//MIDDLEWARES:INTERMEDIO---------------------------------------------------------------------------
//PEGO
app.use(engine);
app.use(express.static("public"));
app.use ((req, res, next)=>{
    console.log(`
        new Request:
        TO: ${req.path}
        METHOD: ${req.method}
        `);
        next(); 
});


//DATA:DATOS ------------------------------------------------------   
const courses = [
    { title: "Desarrollo web con javascript",
 description: "Full stack desde cero",
    },
    { title: "HTML y CSS desde cero",
     description: "Crea webs modernas",
    },
    { title: "VueJS desde cero",
     description: "Framework moderno de JS",
    },
 ];


//ROUTES:RUTAS -------------------------------------------------------------------------
app.get("/",(req, res) => {
    //REEMPLAZAMOS ESTO POR
        /*res.sendFile(path.join(__dirname, "views/index.html"));*/
        //ESTO
        res.render("index", {
            name : "Manu",
            status : "Teach"
        });
    });


app.listen(port, ()=>{
    console.log(`App running on port ${port}`); 
}); 
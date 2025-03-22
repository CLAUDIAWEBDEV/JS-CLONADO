//HACIENDO LOS CURSOS DINAMICOS


//QUIERO COLOCAR MIS CURSOS DEL JS EN INDEX
//Coloco courses denajo de render para que jale los cursos
//elimino la trajeta de body de edge
//agrego ------------ @each (course in courses) (datos del bucle in datos del array)
//agrego al final  @end
//ME MOSTRARA LA TARJETILLA DIV DE EDGE TRIPLICADA
//Coloco {{course.title}} en H1
//Coloco {{course.description}} en P
//ME MOSTRARA LA TARJETILLA CON CADA COURSES DE JS



//IMPORTS:IMPORTACIONES -----------------------------------------------------------------
const express = require ("express");
const path = require ("path");
const app = express();
const engine = require('express-edge');

//SETTINGS:CONFIGURACION  -----------------------------------------------------------------------------
const port = 3001;
app.set("views", path.join(__dirname,"views"));


//MIDDLEWARES:INTERMEDIO---------------------------------------------------------------------------
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
        res.render("index", {
            //COLOCO EL MISMO NOMBRE QUE ESTA EN DATA
           courses,
        });
    });


app.listen(port, ()=>{
    console.log(`App running on port ${port}`); 
});
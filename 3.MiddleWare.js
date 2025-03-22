//QUE ES Y COMO USAR MIDDLE WARE
//MIDDLE WARE : INTERMEDIO SOFTWARE





const express = require ("express");
const app = express();
const port = 3000;
const path = require ("path");


//AL REGISTRAR UN MIDDLE WARE : ES PASAR UNA PETICION
/*
[ - Manejador 1 (global) : (console.log recibido)
  - Manejador 2 (ruta) : (mandar index html)
]
  */

//(GLOBAL)
/*app.use ((req, res, next)=>{
    console.log("Recibido");
    next();
});
*/

//middleware : para saber que metodo y la raiz
app.use ((req, res, next)=>{
    console.log(`
        new Request:
        TO: ${req.path}
        METHOD: ${req.method}
        `);
        next(); 
});



//(RUTA)
app.get(
    "/",
    (req, res, next)=>{
        console.log("Peticion recibida desde la raiz");
        next();
    },
    (req, res) => {
        res.sendFile(path.join(__dirname, "views/index.html"));
    }
);

//CUANDO HAYA UNA PETICION ABOUT QUE RUTAS SE MOSTRARA: la peticion global y luego el about
app.get("/about", (req, res) =>{
    res.send("Estoy en el about");
});



app.listen(port, ()=>{
    console.    log(`App running on port ${port}`); 
}); 
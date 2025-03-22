//ARCHIVOS ESTATICOS NODE

//Primero crear una carpeta llamada "public"





const express = require ("express");
const path = require ("path");
const app = express();
const port = 2000;

//CREAMOS 
app.use(express.static("public"));


app.use ((req, res, next)=>{
    console.log(`
        new Request:
        TO: ${req.path}
        METHOD: ${req.method}
        `);
        next(); 
});




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


/*app.get("/about", (req, res) =>{
    res.send("Estoy en el about");
});*/
app.listen(port, ()=>{
    console.    log(`App running on port ${port}`); 
});
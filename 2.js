//MANDAR ARCHIVO DESDE EL SERVIDOR





//CUANDO HAYA UNA PETICION SE MANDE EL MENSAJE DEL HTML CREADO
const express = require ("express");
//CREO PATH QUE ES UN PAQUETE DE NODE JS : OBJETO QUE ME DEJA INTERACTUAR CON RUTA
const path = require ("path");
const app = express();
const port = 4000;


app.get("/", (req, res)=>{
    //sendFile (ruta dirname) : enviar archivo
    //path join : camino unirse
    console.log(__dirname)
    res.sendFile(path.join(__dirname,'/views/index.html'));
});

app.listen(port, ()=>{
    console.log(`App running on port ${port}`); 
}); 
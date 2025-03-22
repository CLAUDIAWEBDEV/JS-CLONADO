//CREAR UN SERVIDOR WEB CON EXPRESS




//LA LIBRERIA PARA CREAR WEB SE LLAMA LIBRERIA EXPRESS
//PRIMERO ACCEDO COLOCANDO EN TERMINAL : npm i express
const express = require ("express");
const app = express();
//EJECUTO SOBRE APP EL METODO LISTEN PARA QUE SE ESCUCHE PETICIONES
const port = 5000;
//LE INDICAMOS UN GET PARA QUE NOS AVISE CUANDO RECIBA
//LE PASO UNA RESPUESTA
app.get("/", (req, res)=>{
    console.log("Recibido");
    res.send("<h1>Mi primera web con node CLAUDIA</h1>");
});
//CREAR UN METODO LISTEN 
app.listen(port, ()=>{
    console.log(`App running on port ${port}`); 
});
//COLOCO EN TERMINAL : node index.js
//BUSCO EN EL SERVIDOR LA PAGINA : http://localhost:5000/


//PARA YA NO RECARGAR EL TERMINAL USAMOS
//PRIMERO :  npm i nodemon -D
//SEGUNDO : npx nodemon watch .  (punto es porque quiero en este archivo pero se puede cambair al archivo que desee .indm...)








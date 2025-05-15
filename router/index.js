const {Router, query} = require ("express")
const {mapCoursesWithColor} = require ("../utils/mapCoursesWithColors")
const router = Router();


router.get("/", async (req, res) => {
    // const client = new PrismaClient();
     const courses = await req.client.course.findMany({
        //usa para bisqueda sobre nuestros cursos
        where : {
            title: {
                contains: req.query.title,
            },
            //esto es para que el titulo si es igual lo encuentre --- title: req.query.title,    
            
        },
     });
 const coursesWhitColor = mapCoursesWithColor(courses);
    /* console.log({
        query: req.query.title,
     });*/

 /* 
     console.log({
         nuevotitulo: courses,
     });*/
     res.render("index", {
         courses: coursesWhitColor,
         pathName: "home",
         user: req.user,
     });
 });
 
 router.get("/protected", (req, res) => {
    if(!req.isAuthenticated()){
        return res.redirect("/");
    }
    res.render("protected");
 });

 module.exports = {
    mainRouter: router,
 };
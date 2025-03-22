
function mapCoursesWithColor (courses){
     //crear colores a los level
     const colorByLevel = {
        beginner : "blue",
        intermediate : "green",
        advanced : "purple",                
    };
    //añadir array de courses y a cada objeto de curso añadirle la propiedad con los colores
      const coursesWhitColor =  courses.map(course=>{
            return{
                ...course,
                color : colorByLevel[course.level], 
            };
        });
        //devuelve con el color añadido
        return coursesWhitColor;
};

module.exports = {
    mapCoursesWithColor,
}
                                                                                                 
/* que recibe un número que indica el lado del cuadrado y retorna el área del mismo.*/
const getSquareArea = (c) => {
    let result;
    if (typeof c === "number") {
        result=c*c;
    } else{
        result= "Paramaters given must be a number";
    }
    return result;
};
getSquareArea();

const getSquareTriangle =(b,h)=>{
    
   return (b*h)/2;
};
getSquareTriangle();
/*  Este fichero debe tener otra función llamada  que recibe un número con la base y otro con la altura del triángulo y retorna el área del mismo.


Este fichero debe exportar un objeto con las dos funciones dentro. */
const objectToExport = {
    getSquareArea: getSquareArea, 
    getSquareTriangle: getSquareTriangle
};
export default objectToExport; 


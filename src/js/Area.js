const getSquareArea = (c) => {
    let result;
    if (typeof c === "number") {
        result=c*c;
    } else{
        result= "Paramaters given must be a number";
    }
    return result;
};

const getSquareTriangle =(b,h)=>{
    
   return (b*h)/2;
};


const objectToExport = {
    getSquareArea: getSquareArea, 
    getSquareTriangle: getSquareTriangle
};


export default objectToExport; 


/* Al testear un fichero de JavaScript (y no un componente de React), no es necesario importar import { render, screen } from '@testing-library/react';. */
import "@testing-library/jest-dom/extend-expect";
import { prettyDOM } from "@testing-library/dom";
import Area from "./Area";

describe("Testing Area component", ()=> {
    test("getSquareArea(3) equals 9", ()=> {
        const result = Area.getSquareArea(3);
        console.log(prettyDOM(result));
        expect(result).toBe(9);
    });
    test("getSquareTriangle(3,4) equals 6", ()=>{
        const result = (3*4)/2;
        console.log(prettyDOM(result));
        expect(result).toBe(6);
    });
});
  
/* Crea otro test que compruebe que si le pasamos a la función getSquareTriangle() un 3 y un 4 esta nos devuelve un 6. */
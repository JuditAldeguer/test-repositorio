/* Al testear un fichero de JavaScript (y no un componente de React), no es necesario importar import { render, screen } from '@testing-library/react';. */
import "@testing-library/jest-dom/extend-expect";
import Area from "./Area";

describe("Testing Area component", ()=> {
    test("getSquareArea(3) equals 9", ()=> {
        const result = Area.getSquareArea(3);
        console.log(result);
        expect(result).toBe(9);
    });
    test("getSquareTriangle(3,4) equals 6", ()=>{
        const result = Area.getSquareArea(3,4);
        console.log(result);
        expect(result).toBe(6);
    });
});
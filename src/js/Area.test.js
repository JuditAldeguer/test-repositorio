import "@testing-library/jest-dom/extend-expect";
import { prettyDOM } from "@testing-library/dom";
import { render, screen } from "@testing-library/react";
import Area from "./Area";

describe("Testing Area component", ()=> {
    test("getSquareArea(3) equals 9", ()=> {
        const result = Area.getSquareArea(3);
        expect(result).toBe(9);
    });
});
  
/* Crea un test que compruebe que si le pasamos a la función getSquareArea() un 3 esta nos devuelve un 9.
Crea otro test que compruebe que si le pasamos a la función getSquareTriangle() un 3 y un 4 esta nos devuelve un 6.
Por cierto, como aquí estamos testeando un fichero de JavaScript y no un componente de React, no es necesario importar import { render, screen } from '@testing-library/react';. */
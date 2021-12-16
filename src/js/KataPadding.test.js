import "@testing-library/jest-dom/extend-expect";
import { prettyDOM } from "@testing-library/dom";
import { render, screen } from "@testing-library/react";
import kata from "./kataPadding";

describe("Testing KataPading functionality",()=>{
    test("paddingLeft('hola', 6, 'x') devuelve 'xxhola'", ()=>{
        const result = kata('hola', 6, 'x');
        console.log(result);
        expect(result).toBe('xxhola');
    });




/* 
paddingLeft('hola', 6, 'a') devuelve 'aahola'
paddingLeft('ee', 4, 'aa') devuelve 'aaee'
paddingLeft('xxxx', 6, 'x') devuelve 'xxxxxx'
paddingLeft('', 6, 'x') devuelve 'xxxxxx'
paddingLeft('hola mi amigo', 6, 'x') devuelve 'hola mi amigo'
paddingLeft('xxxx', 0, 'x') devuelve 'xxxx' */

});

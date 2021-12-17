import "@testing-library/jest-dom/extend-expect";
import kata from "./kataPadding";

describe("Testing KataPading functionality",()=>{
    test("paddingLeft('hola', 6, 'x') devuelve 'xxhola'", ()=>{
        const result = kata('hola', 6, 'x');
        expect(result).toBe('xxhola');
    });
    test("paddingLeft('hola', 6, 'a') devuelve 'aahola'", ()=>{
        const result = kata('hola', 6, 'a');
        expect(result).toBe('aahola');
    });
    test("paddingLeft('ee', 4, 'aa') devuelve 'aaee'",()=>{
        const result = kata('ee', 4, 'aa');
        expect(result).toBe('aaee');
    });


/* 
paddingLeft('xxxx', 6, 'x') devuelve 'xxxxxx'
paddingLeft('', 6, 'x') devuelve 'xxxxxx'
paddingLeft('hola mi amigo', 6, 'x') devuelve 'hola mi amigo'
paddingLeft('xxxx', 0, 'x') devuelve 'xxxx' */

});

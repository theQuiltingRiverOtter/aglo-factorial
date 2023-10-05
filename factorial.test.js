
const {factorial, r_factorial} = require("./factorial.js");

describe("Tests factorial for small numbers", () => {
    test("Tests factorial(4) = 24", () => {
        expect(factorial(4)).toBe(24);
    })
    test("Tests factorial(5) = 120", () => {
        expect(factorial(5)).toBe(120);
    })
    test("Tests factorial(6) = 720", () => {
        expect(factorial(6)).toBe(720);
    })
})

describe("Tests factorial for large numbers", () => {
    test("Tests factorial(10) = 3,628,800", () => {
        expect(factorial(10)).toBe(3628800);
    })
    test("Tests factorial(11) = 39,916,800", () => {
        expect(factorial(11)).toBe(39916800);
    })
    test("Tests factorial(1000) = 87,178,291,200", () => {
        expect(factorial(14)).toBe(87178291200);
    })
})

describe("Tests r_factorial for small numbers", () => {
    test("Tests r_factorial(4) = 24", () => {
        expect(r_factorial(4)).toBe(24);
    })
    test("Tests r_factorial(5) = 120", () => {
        expect(r_factorial(5)).toBe(120);
    })
    test("Tests r_factorial(6) = 720", () => {
        expect(r_factorial(6)).toBe(720);
    })
})

describe("Tests r_factorial for large numbers", () => {
    test("Tests r_factorial(10) = 3,628,800", () => {
        expect(r_factorial(10)).toBe(3628800);
    })
    test("Tests r_factorial(11) = 39,916,800", () => {
        expect(r_factorial(11)).toBe(39916800);
    })
    test("Tests r_factorial(1000) = 87,178,291,200", () => {
        expect(r_factorial(14)).toBe(87178291200);
    })
})
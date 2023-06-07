import { divide } from "./divide";

describe("divide", () => {
  test("should return the expected value based on the given inputs", () => {
    expect(divide(2, 2)).toBe(1);
  });

  test("should return a number", () => {
    expect(divide(2, 2)).not.toBeNaN();
  });

  test("Should return anything different than zero", () => {
    expect(divide(3, 2)).not.toBe(0);
  }); // Qualquer retorno que não seja zero.

  test("Should return something greater than zero", () => {
    expect(divide(10, 5)).toBeGreaterThan(0);
  }); // Qualquer retorno maior que zero.

  test("Should return something less than zero", () => {
    expect(divide(10, -5)).toBeLessThan(0);
  }); // Qualquer retorno menor que zero.

  test("should return an error if parameter equal to 0", () => {
    expect(() => divide(2, 0)).toThrow("Operação inválida!");
  });

  test("should return an error if parameter NaN", () => {
    expect(() => divide(2, "a")).toThrow("Operação inválida!");
  });
});

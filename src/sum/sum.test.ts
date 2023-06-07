import { describe, expect, test } from "@jest/globals";
import { sum } from "./sum";

describe("sum function", () => {
  test("should sum and return the property value according to the given input", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("should return a pre-defined error message", () => {
    expect(() => sum(1, "b")).toThrow("Operação inválida!"); //é necessário passar uma arrow function para que retorne a execução da função
  });
});

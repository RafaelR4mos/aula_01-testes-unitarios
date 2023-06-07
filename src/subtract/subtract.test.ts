import { subtract } from "./subtract";
import { expect, test } from "@jest/globals";

test("Should return the property value based on the given inputs", () => {
  expect(subtract(2, 2)).toBe(0);
});

test("Should return the property value based on the given inputs", () => {
  expect(subtract(2, -2)).toBe(4);
});

test("Should return the property value based on negative inputs", () => {
  expect(subtract(-2, -2)).toBe(-4);
});

test("Should return a pre-defined error message", () => {
  expect(() => subtract(2, "a")).toThrow("Operação inválida");
});

import { compareGrades } from "./compareGrades";

describe("compareGrades", () => {
  test("should return 'Aprovado!' ", () => {
    expect(compareGrades([10, 8, 7])).toBe("Aprovado!");
  });

  test("should return 'Aprovado!' ", () => {
    expect(compareGrades([10, 8, 7])).toMatch(/aprovado!/i); //Expressão regular aqui. /i faz a comparação DEIXAR de ser case-sensitive
  });

  test("should return 'Reprovado!' ", () => {
    expect(compareGrades([2, 1, 0])).toMatch(/reprovado/i);
  });

  test("should return an error case negative input", () => {
    expect(() => compareGrades([-2, 1, 0])).toThrow("Nota inválida inserida!");
  });

  test("should return an error case greater than 10 input", () => {
    expect(() => compareGrades([11, 1, 0])).toThrow("Nota inválida inserida!");
  });
});

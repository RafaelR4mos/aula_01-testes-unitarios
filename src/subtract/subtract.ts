export const subtract = (a: number, b: any) => {
  if (isNaN(a) || isNaN(b)) {
    throw new Error("Operação inválida");
  }

  if (a < 0 && b < 0) {
    return a + b;
  }

  return a - b;
};

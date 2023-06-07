export const sum = (a: number, b: any): number => {
  if (isNaN(a) || isNaN(b)) {
    throw new Error("Operação inválida!");
  }

  return a + b;
};

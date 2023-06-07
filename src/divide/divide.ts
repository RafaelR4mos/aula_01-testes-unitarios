export const divide = (n1: number, n2: any) => {
  if (isNaN(n1) || isNaN(n2)) {
    throw new Error("Operação inválida!");
  }
  if (n1 === 0 || n2 === 0) {
    throw new Error("Operação inválida!");
  }

  return n1 / n2;
};

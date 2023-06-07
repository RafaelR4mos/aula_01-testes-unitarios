export const compareGrades = (grades: number[]) => {
  const aprovalScore = 6;

  const average = grades.reduce((acc, grade) => (acc += grade)) / grades.length;
  if (grades.some((grade) => grade < 0 || grade > 10)) {
    throw new Error("Nota inválida inserida!");
  } else {
    if (average > aprovalScore) {
      return "Aprovado!";
    } else {
      return "Reprovado";
    }
  }
};

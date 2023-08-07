function average(grades) {
  const gradeSum = grades.reduce((acc, total) => acc + total, 0);

  return gradeSum / grades.length;
}

module.exports = average;
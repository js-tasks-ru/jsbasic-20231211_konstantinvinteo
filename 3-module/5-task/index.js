function getMinMax(str) {
  const numbers = str
    .split(" ")
    .filter((item) => !isNaN(parseFloat(item)))
    .map(parseFloat);
  const minValue = Math.min(...numbers);
  const maxValue = Math.max(...numbers);

  return {
    min: minValue,
    max: maxValue,
  };
}

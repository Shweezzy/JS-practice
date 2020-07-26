const sum = (...params) => {
  if (!params.length) return 0;
  return params.reduce((prev, next) => prev + next);
}
//обєкт в функціі ({})
const convertToObject = num => ({
  value: num,
  isOdd: Boolean(num % 2)
});
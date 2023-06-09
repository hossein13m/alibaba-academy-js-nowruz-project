function maxMin(arr) {
  if (!validationCheck(arr)) return "bad request!";
  let min = arr[0];
  let max = arr[0];
  for (const iterator of arr) {
    if (iterator < min) min = iterator;
    else if (iterator > max) max = iterator;
  }
  return JSON.stringify({ min, max });
}

function validationCheck(arr) {
  if (!isArrTypeValid(arr)) return false;
  if (isArrEmpty(arr)) return false;
  return true;
}

function isArrTypeValid(arr) {
  return Array.isArray(arr);
}

function isArrEmpty(arr) {
  return arr.length === 0;
}

// test case for get max and min value of arrays
console.log(maxMin());
console.log(maxMin(""));
console.log(
  `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]: ${maxMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}`
);
console.log(
  `[10, 11, 30, 33, 90, 99, -1, 20, 22]: ${maxMin([
    10, 11, 30, 33, 90, 99, -1, 20, 22,
  ])}`
);

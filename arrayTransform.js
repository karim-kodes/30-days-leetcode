// Given an integer array arr and
// a mapping function fn, return a new array
//  with a transformation applied to each element.

// The returned array should be created such
// that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.

// 1.SOLUTION ONE
// FOR ....IN LOOP
// RUNTIME: 42ms

const map = function (arr, fn) {
  const res = [];
  for (const i in arr) {
    res[i] = fn(arr[i], Number(i));
  }
  return res;
};

// SOLUTION 2
// FOR LOOP
const map2 = function (arr, fn) {
  const res = [];

  for (const i = 0; i < arr.length; i++) {
    res.push(fn(arr[i], i));
  }
  return res;
};

// SOLUTION 3
// FOR .........OF LOOP
const map3 = function (arr, fn) {
  const result = [];
  let index = 0;

  for (const num of arr) {
    result.push(fn(num, index));
    index++;
  }

  return result;
};

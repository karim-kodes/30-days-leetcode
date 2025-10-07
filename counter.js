// Given an integer n, return a counter function.
// This counter function initially returns n
// and then returns 1 more than the previous value every
// subsequent time it is called (n, n + 1, n + 2, etc).

//1. SOLUTION ONE
// RUNTIME: 44ms

const createCounter = function (n) {
  return function () {
    return n++;
  };
};

const counter = createCounter(10);
counter();
counter();
counter();

// 2.SOLUTION TWO
// RUNTIME: 40ms
const createCounter2 = function (n) {
  let count = n;
  return function () {
    return count++;
  };
};

const counter2 = createCounter2(10);
counter();
counter();
counter();

// SOLUTION 3
// CLASS IMPLEMENTATION

class Counter {
  constructor(n) {
    this.n = n;
  }

  increment() {
    return ++this.n;
  }
}

const counter3 = Counter(10);
counter3.increment();
counter3.increment();
counter3.increment();

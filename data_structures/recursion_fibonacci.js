// f(n) = f(n - 1) + f(n - 2)
// 1, 1, 2, 3, 5, 8, 13, ...

import benchmark from "benchmark";

function fibonacciRecursive(n) {
  if (n < 3) {
    return 1;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// The best algorithm
function fibonacciIterative(n) {
  if (n < 3) {
    return 1;
  }
  let res = 1, prev = 1;
  while (n > 2) {
    const temp = prev;
    prev = res;
    res += temp;
    n--;
  }
  return res;
}

function fibonacciTailCallOptimizationTrampoline(n) {
  function trampoline(fn) {
    while (typeof fn === 'function') {
      fn = fn();
    }

    return fn;
  }

  function fibonacciHelper(n, prev1, prev2) {
    if (n < 3) {
      return prev2;
    }

    // Now, a function returns another function
    return function() { return fibonacciHelper(n - 1, prev2, prev1 + prev2) };
  }

  return trampoline(fibonacciHelper(n, 1, 1));
}

const N = 20;
const suite = new benchmark.Suite('suite');
suite
  .add('fibonacciRecursive', function () {
    fibonacciRecursive(N)
  })
  .add('fibonacciIterative', function () {
    fibonacciIterative(N)
  })
  .add('fibonacciTailCallOptimizationTrampoline', function () {
    fibonacciTailCallOptimizationTrampoline(N)
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({'async': true});

/*
fibonacciRecursive x 16,571 ops/sec ±0.67% (91 runs sampled)
fibonacciIterative x 49,149,261 ops/sec ±3.60% (78 runs sampled)
fibonacciTailCallOptimizationTrampoline x 2,353,573 ops/sec ±1.04% (87 runs sampled)
Fastest is fibonacciIterative
*/

// n! = n * (n - 1) * (n - 2) * ... * 1

import benchmark from "benchmark";

function factorialRecursive(n) {
  if (n < 3) {
    return n;
  }
  return n * factorialRecursive(n - 1);
}

// The best algorithm
function factorialIterative(n) {
  let res = 1;
  while (n > 2) {
    res *= n;
    n--;
  }
  return res;
}

// Still have call stack issue
function factorialTailCallOptimization(n) {
  return (function factorialHelper(x, accumulator) {
    if (x < 2) {
      return accumulator;
    }

    return factorialHelper(x - 1, x * accumulator);
  })(n, 1);
}

function factorialTailCallOptimizationTrampoline(n) {
  function trampoline(fn) {
    while (typeof fn === 'function') {
      fn = fn();
    }

    return fn;
  }

  function factorialHelper(x, accumulator) {
    if (x < 2) {
      return accumulator;
    }

    // Now, a function returns another function
    return function() { return factorialHelper(x - 1, x * accumulator) };
  }

  return trampoline(factorialHelper(n, 1));
}

const N = 1000;
const suite = new benchmark.Suite('suite');
suite
  .add('factorialRecursive', function () {
    factorialRecursive(N)
  })
  .add('factorialIterative', function () {
    factorialIterative(N)
  })
  .add('factorialTailCallOptimization', function () {
    factorialTailCallOptimization(N)
  })
  .add('factorialTailCallOptimizationTrampoline', function () {
    factorialTailCallOptimizationTrampoline(N)
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({'async': true});

/*
factorialRecursive x 102,520 ops/sec ±6.87% (71 runs sampled)
factorialIterative x 932,588 ops/sec ±1.08% (90 runs sampled)
factorialTailCallOptimization x 102,691 ops/sec ±3.01% (83 runs sampled)
factorialTailCallOptimizationTrampoline x 38,504 ops/sec ±5.14% (84 runs sampled)
Fastest is factorialIterative
*/
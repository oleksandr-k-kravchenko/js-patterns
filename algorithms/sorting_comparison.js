import benchmark from "benchmark";
import insertionSort from "./sorting_insertion.js";
import mergeSort from "./sorting_merge.js";
import { generate, generateReverse } from "../array_helpers.js";

function sortReverse(n, fn) {
  fn(generateReverse(n));
}

function sort(arr, fn) {
  fn([...arr]);
}

const N = 50;
const randomOrderingArray = generate(N);

const suite = new benchmark.Suite('suite');
suite
  .add('insertion sort - random', function () {
    sort(randomOrderingArray, insertionSort);
  })
  .add('insertion sort - reverse', function () {
    sortReverse(N, insertionSort);
  })
  .add('merge sort - random', function () {
    sort(randomOrderingArray, mergeSort);
  })
  .add('merge sort - reverse', function () {
    sortReverse(N, mergeSort);
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({'async': true});
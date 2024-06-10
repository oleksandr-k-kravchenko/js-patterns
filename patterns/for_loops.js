import timeIt from "../_time_it.js";

function forLoopRegular(array) {
  for (var i = 0; i < array.length; i++) {}
}

function forLoopCacheMax(array) {
  for (var i = 0, max = array.length; i < max; i++) {}
}

function forLoopCountDownToZero(array) {
  var i;
  for (i = array.length; i--;) {}
}

function forLoopCountDownToZeroWhile(array) {
  var i = array.length;

  while (i--) {}
}

var array = new Array(1000000000);

timeIt(function () { forLoopRegular(array) }); // Finished in 594 ms
timeIt(function () { forLoopCacheMax(array) }); // Finished in 574 ms
timeIt(function () { forLoopCountDownToZero(array) }); // Finished in 488 ms
timeIt(function () { forLoopCountDownToZeroWhile(array) }); // Finished in 485 ms

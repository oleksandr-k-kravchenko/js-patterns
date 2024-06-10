var timeIt = function timeIt (fn) {
  var start = new Date();
  fn();
  var end = new Date();
  var time = end.getTime() - start.getTime();
  console.log('Finished in', time, 'ms');
  return time;
}

export default timeIt;

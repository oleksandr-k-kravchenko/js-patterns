export function printArray(arr) {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    res += arr[i] + " ";
  }
  console.log(res);
  return res;
}

export function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
}

export function generate(n) {
  const arr = new Array(n);
  while (n--) {
    arr[n] = n;
  }
  shuffle(arr);
  return arr;
}

export function generateReverse(n) {
  const arr = new Array(n);
  const length = n;
  while (n--) {
    arr[n] = length - n;
  }
  return arr;
}

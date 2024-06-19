/*
  Best Case: O(N * log N)
  Average Case: O(N * log N)
  Worst Case: O(N * log N)

  Space: O(N)
*/

export default function mergeSort(arr) {
  function merge(left, middle, right) {
    const leftLength = middle - left + 1;
    const rightLength = right - middle;

    const leftArray = new Array(leftLength);
    const rightArray = new Array(rightLength);

    for(let i = 0; i < leftLength; i++) {
      leftArray[i] = arr[i + left];
    }
    for(let i = 0; i < rightLength; i++) {
      rightArray[i] = arr[i + middle + 1];
    }

    let leftIndex = 0, rightIndex = 0, arrIndex = left;

    while (leftIndex < leftLength && rightIndex < rightLength) {
      if (leftArray[leftIndex] <= rightArray[rightIndex]) {
        arr[arrIndex] = leftArray[leftIndex];
        leftIndex++;
      } else {
        arr[arrIndex] = rightArray[rightIndex];
        rightIndex++;
      }
      arrIndex++;
    }
    while (leftIndex < leftLength) {
      arr[arrIndex] = leftArray[leftIndex];
      leftIndex++;
      arrIndex++;
    }
    while (rightIndex < rightLength) {
      arr[arrIndex] = rightArray[rightIndex];
      rightIndex++;
      arrIndex++;
    }
  }

  function sort(left, right) {
    if (left >= right) {
      return;
    }

    const middle = ~~((right + left) / 2);
    sort(left, middle);
    sort(middle + 1, right);
    merge(left, middle, right);
  }

  sort(0, arr.length - 1);
}
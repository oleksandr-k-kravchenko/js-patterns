/*
  Best Case: O(N)
  Average Case: O(N*N)
  Worst Case: O(N*N)

  Space: O(1)
*/

export default function insertionSort(arr) {
  let i, j, key;
  for (i = 1; i < arr.length; i++) {
    j = i - 1;
    key = arr[i];

    while (~j && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}

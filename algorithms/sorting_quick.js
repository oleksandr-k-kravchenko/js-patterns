/*
  Best Case: O(N * log N)
  Average Case: O(N * log N)
  Worst Case: O(N * N)

  Space: O(N)
*/

export default function quickSort(arr) {
  function sort(left, right) {
    let i = left, j = right;
    const pivot = arr[~~((left + right + 1) / 2)];

    while (i <= j) {
      while (arr[i] < pivot) {
        i++;
      }
      while (arr[j] > pivot) {
        j--;
      }

      if (i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
      }
    }

    if (j > left) {
      sort(left, j);
    }
    if (i < right) {
      sort(i, right);
    }
  }

  sort(0, arr.length - 1);
}

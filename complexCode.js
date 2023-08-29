/* filename: complexCode.js */

// This code demonstrates a complex algorithm for sorting an array of numbers in ascending order.
// It uses the quicksort algorithm, which has an average time complexity of O(n log n).

// Function to partition the array and place the pivot element in its correct position
function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

// Function to perform the quicksort algorithm recursively
function quicksort(arr, low, high) {
  if (low < high) {
    let pivotIndex = partition(arr, low, high);
    quicksort(arr, low, pivotIndex - 1);
    quicksort(arr, pivotIndex + 1, high);
  }
}

// Main function to test the sorting algorithm
function complexSorting() {
  const arr = [9, 5, 1, 8, 3, 7, 6, 2, 4];
  console.log("Original array:", arr);

  quicksort(arr, 0, arr.length - 1);

  console.log("Sorted array:", arr);
}

complexSorting();
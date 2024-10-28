const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const binarySearch = (array, targetNum, leftIndex, rightIndex) => {
  while (leftIndex <= rightIndex) {
    const midIndex = leftIndex + ((rightIndex - leftIndex) >> 1);

    if (array[midIndex] === targetNum) {
      return midIndex;
    }

    if (array[midIndex] < targetNum) {
      leftIndex = midIndex + 1;
    }

    if (targetNum < array[midIndex]) {
      rightIndex = midIndex - 1;
    }
  }

  return -1;
};

console.log(binarySearch(array, 5, 0, array.length - 1));

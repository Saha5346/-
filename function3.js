function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

const array = [68, 189, -23, 0, 4, 1000];
const sortedArray = sortArray(array);
console.log(sortedArray); // Output: [-23, 0, 4, 68, 189, 1000]
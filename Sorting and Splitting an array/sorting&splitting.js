var originalArray = [-1, 3, 67, 2, 12, 9];

// Add a new element at the end of the array.
function addElement(array, element) {
    if (typeof element === 'number') {
        array[array.length] = element;
    } else {
        console.log("The value to be added is not a number.");
    }
}

addElement(originalArray, 42); // Adding a new element to the end of the array.

console.log(originalArray);

// Sort the array in descending order.
function sortDescending(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] < array[j]) {
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
}

sortDescending(originalArray);

console.log(originalArray);

// Split the array into two new arrays.
function splitArray(array) {
    var midIndex = Math.floor(array.length / 2);
    var firstArray = array.slice(0, midIndex);
    var secondArray = array.slice(midIndex);

    console.log("First Array:");
    console.table(firstArray);

    console.log("Second Array:");
    console.table(secondArray);
}

splitArray(originalArray);
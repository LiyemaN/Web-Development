// Count the number of odd numbers in an array.
var odds = function(arr) {
    var count = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0) {
            count++;
        }
    }
    return count;
}

// Count the number of even numbers in an array.
var evens = function(arr) {
    var count = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}

// Find all numbers in an array that are divisible by a given number.
var divisible = function(arr, divisor) {
    var result = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] % divisor === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

var arr = [34,6,89,1,45];
console.log(odds(arr)); 
console.log(evens(arr)); 
console.log(divisible(arr, 3)); 
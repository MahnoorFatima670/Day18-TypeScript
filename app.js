function oddSumMulTable(myarray) {
    var sum = 0;
    var mynum;
    for (var i = 0; i < myarray.length; i++) {
        if (myarray[i] % 2 != 0) {
            sum = sum + myarray[i];
            mynum = sum;
        }
    }
    console.log("sum of odd numbers in array ".concat(myarray, " is:").concat(sum));
    console.log("Table of ".concat(mynum, " is:"));
    for (var j = 1; j <= 10; j++) {
        console.log("".concat(mynum, "*").concat(j, "=").concat(mynum * j));
    }
}
oddSumMulTable([1, 2, 3, 4, 5]);
function squareEvenNumbers(array1) {
    var squaredArray = [];
    var squareNum;
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] % 2 == 0) {
            squareNum = array1[i] * array1[i];
            squaredArray.push(squareNum);
        }
    }
    return squaredArray;
}
console.log(squareEvenNumbers([1, 5, 30, 9, 2]));

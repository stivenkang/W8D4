const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
    reader.question(`Is ${el1} > ${el2}? Yes or No: \n`, function(answer) {
        if (answer === "Yes") {
            callback(true);
        } else {
            callback(false);
        }
    })
}

askIfGreaterThan(2, 7, function(condition) {
    console.log(condition)
})

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i == (arr.length -1)) {
        outerBubbleSortLoop(madeAnySwaps);
    } else {
        askIfGreaterThan(arr[i], arr[i+1], isGreaterThan(askIfGreaterThan))
    }
}

// function absurdBubbleSort(arr, sortCompletionCallBack) {
//     function outerBubbleSortLoop(madeaAnySwaps) {

//     }
// }





// absurdBubbleSort([3, 2, 1], function(arr) {
//     console.log("Sorted array: " + JSON.stringify(arr));
//     reader.close();
//   });
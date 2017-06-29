const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// reader.question("What is your name?", function (answer) {
//   console.log(`Hello ${answer}!`);
//
//   Close the reader, which will allow the program to end because it
//   is no longer waiting for any events.
//   reader.close();
// });

const askIfGreaterthan = function (el1, el2, callback) {
  reader.question(`Is ${el1} > ${el2}?`, function (answer) {
    if (answer == "yes") {
      callback(true);
    } else {
      callback(false);
    }
  });
};

const innerBubbleSortLoop = function (arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterthan(arr[i], arr[i+1], function (isGreaterThan) {
      if (isGreaterThan) {
        madeAnySwaps = true;
        let hubert = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = hubert;
      }
      innerBubbleSortLoop(arr, ++i, madeAnySwaps, outerBubbleSortLoop);
    });
  } else if (i === arr.length - 1){
    outerBubbleSortLoop(madeAnySwaps);
  }
};
// innerBubbleSortLoop([1,7,2,4],0,false,(swaps) => console.log(swaps));

const absurdBubbleSort = function (arr, sortCompletionCallback) {
  outerBubbleSortLoop(true);
  function outerBubbleSortLoop (madeAnySwaps) {
    if (madeAnySwaps == true) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else if (madeAnySwaps == false) {
      sortCompletionCallback(arr);
      reader.close();
    }
  }
};

absurdBubbleSort([7,1,5,3], (arr) => console.log(arr));

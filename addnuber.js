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

const addNumbers = function (sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    let num;
    reader.question(`Enter number: ${numsLeft} remaining`, function (answer) {
      num = parseInt(answer);
      sum += num;
      numsLeft -= 1;
      console.log(sum);
      addNumbers(sum, numsLeft, completionCallback);
    });
  } else {
    completionCallback(sum);
    reader.close();
  }
};

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let userInput = "";

rl.question("Введите строку\n", function (string) {
  userInput = string;
  var k = 0, max = 0;
  for (var i = 0; i < userInput.length; i++) {
    if (userInput[i] == '1'){
        k = k + 1;
    }
    else{
        k = 0;
    }
    if (k > max){
        max = k;
    }
  }
  console.log(max);
  rl.close();
});
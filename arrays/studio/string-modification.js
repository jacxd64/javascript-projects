const input = require('readline-sync');
let str = "LaunchCode";


//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let inputedWord = input.question("Enter a word: ")
newWord = inputedWord.slice(3) + inputedWord.slice(0, 3);
//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`${str} in pig-latin is ${newWord}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

inputedNum = input.question("Enter a number: ")

if (inputedWord.length < inputedNum) {
  inputedNum = 3;
  console.log(`Error: Word length: ${inputedWord.length} less than number given: ${inputedNum}.\nDefaulting to 3`)
}
newWord2 = inputedWord.slice(inputedNum) + inputedWord.slice(0, inputedNum)
console.log(newWord2);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
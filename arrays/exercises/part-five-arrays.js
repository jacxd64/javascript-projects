let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().

console.log(str.split("o"));
//split will split a string into an array at the the character specified in the ("") and also delete those characters, if ("") is empty like this, it will split between every character.

//2) Use the join method on the array to identify the purpose of the parameter inside the ().

console.log(arr.join("n"));
//join does the opposite of split and concotanates a array into a string adding the character in the () in between the gaps like glue.

//3) Do split or join change the original string/array?

//no

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
cargoHold = cargoHold.split(',').sort().join(',');
console.log(cargoHold);
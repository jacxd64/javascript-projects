let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function() {return Math.floor(Math.random() * 11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function() {return Math.floor(Math.random() * 11)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function() {return Math.floor(Math.random() * 11)}
};

let spaceDog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function() {return Math.floor(Math.random() * 11)}
}

let invincibleBug = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function() {return Math.floor(Math.random() * 11)}
}


// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

let crew = [superChimpOne, salamander, superChimpTwo, spaceDog, invincibleBug];

// Print out the relevant information about each animal.

function crewReports(obj) {
   console.log(`${obj.name} is a ${obj.species}. They are ${obj.age} years old and ${obj.mass} kilograms. Their ID is ${obj.astronautID}.`)
}

// Start an animal race!

function fitnessTest(arr) {
   results = []
   for (let i = 0; i < arr.length; i++) {
      let done = false;
      let total = 0;
      let turns = 0;
      while (total < 20){
         total += arr[i].move();
         turns ++;
      }
      results.push(`${arr[i].name} took ${turns} turns to take 20 steps.`)
   }
   return results;
}

for (let i = 0; i < crew.length; i++) {
   console.log(fitnessTest(crew)[i])
}
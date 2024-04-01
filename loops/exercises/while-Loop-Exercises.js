//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let fuel = 0;
let astrosAboard = 0;
let shuttleAltitude = 0;



/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

const input = require('readline-sync');

let fuelValidation = false;

while (fuelValidation === false) {
  fuel = input.question("What is the shuttle's initial fuel level?: ");
  fuel = Number(fuel);

  if (fuel <= 5000 || fuel >= 30000) {
    console.log("Invalid Entry, try again.\n");
  } else {
    console.log("confirmed.\n");
    fuelValidation = true;
  }
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
let popValidation = false;

while (popValidation === false) {
  astrosAboard = input.question("How many astronauts are on board?: ");
  astrosAboard = Number(astrosAboard);

  if (astrosAboard > 7) {
    console.log("Too many astronauts, try again.\n");
  } else if (astrosAboard < 1 || astrosAboard % 1 != 0) {
    console.log("Invalid entry, try again.\n");
  } else {
    console.log("confirmed.\n");
    popValidation = true;
  }
}
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

let fuelLimit = astrosAboard * 100;


while (fuel >= fuelLimit) {
  shuttleAltitude += 50;
  fuel -= fuelLimit;
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

console.log(`The shuttle gained an altitude of ${shuttleAltitude} km.`)

if (shuttleAltitude >= 2000) {
  console.log("Orbit achieved!")
} else {
  console.log("Failed to reach orbit.")
}
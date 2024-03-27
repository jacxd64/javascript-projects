// Initialize Variables below

let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";

let line = "____________________________________________________";

//condition boolean checks

let astronautCountCheck = true;
let astronautStatusCheck = true;
let totalMassCheck = true;
let fuelTempCheck = true;
let fuelLevelCheck = true;
let weatherCheck = true;
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount > 7) {
    console.log("Too many astronauts!");
    astronautCountCheck = false;
}
// add logic below to verify all astronauts are ready

if (astronautStatus !== "ready") {
  console.log("Astronauts not ready!")  
  astronautStatusCheck = false;
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg > maximumMassLimit) {
  console.log("Astronauts are too fat!");
  totalMassCheck = false;
}


// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius < minimumFuelTemp || fuelTempCelsius > maximumFuelTemp) {
 console.log("Temperature not within range.");
  fuelTempCheck = false;
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel !== "100%"){
  console.log ("Fuel level low.");
  fuelLevelCheck = false;
}

// add logic below to verify the weather status is clear
if (weatherStatus !== "clear") {
  console.log("Weather unpredictable.");
  weatherCheck = false;
}
// Verify shuttle launch can proceed based on above conditions
if (astronautCountCheck === true && astronautStatusCheck === true && totalMassCheck === true && fuelTempCheck === true && fuelLevelCheck === true && weatherCheck === true) {
  console.log("All systems are a go! Initiating space shuttle launch sequence.\n" + line + "\nDate: " + date + "\nTime: " + time + "\nAstronaut Count: " + astronautCount + "\nCrew Mass: " + crewMassKg + " kg\n" + "Fuel Mass: " + fuelMassKg + " kg\n" + "Shuttle Mass: " + shuttleMassKg + " kg\n" + "Total Mass: " + totalMassKg + " kg\n" + "Fuel Temperature: " + fuelTempCelsius + "°C\n" + "Weather Status: " + weatherStatus + "\n" + line + "\nHave a safe trip astronauts!");
}
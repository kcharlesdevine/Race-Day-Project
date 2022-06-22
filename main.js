let raceNumber = Math.floor(Math.random() * 1000);
// console.log(raceNumber);

var registeredEarly = true
var runnerAge = 17

 if (registeredEarly && runnerAge >= 18){
    raceNumber += 1000;} 

if (registeredEarly && runnerAge >= 18){
    console.log(`Hello ${raceNumber}, you will run at 9:30am`)
} else if (registeredEarly === false && runnerAge >= 18){
    console.log(`Hello ${raceNumber}, you will run at 11:00 am`)
} if (runnerAge < 18){
    console.log(`Hello ${raceNumber}, you will run at 12:30pm`)
}

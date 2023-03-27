// Code your solution here
const drivers = [];

function findMatching(drivers, name){
return drivers.filter(driver => driver.toLowerCase()===name.toLowerCase());
}

function fuzzyMatch(drivers,name){
  return drivers.filter(driver => driver[0]===name[0] && driver[1]===name[1])
}

function matchName(drivers, name){
  return drivers.filter(driver =>driver.name===name)
}

const result = matchName(drivers, "Bobby")
console.log(result)
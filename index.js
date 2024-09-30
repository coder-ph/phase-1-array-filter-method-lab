// // Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (collection, str){
   const drivermatch = []
    for(const driver of collection){
        if ( driver.toLowerCase() === str.toLowerCase()){
            
            (drivermatch.push(driver))
        }    
    } return drivermatch
}
console.log(findMatching(drivers, "bobby"))

function fuzzyMatch(collection, char) {
    const drivers = [];
    for (const driver of collection) {
        // Compare only the first part of the driver's name with the 'char'
        if (driver.slice(0, char.length) === char) {
            drivers.push(driver);
        }
    }
    return drivers;
}

const driversList = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
console.log(fuzzyMatch(driversList, "Sa")); 

// const drivers = [
//     {
//       name: 'Bobby',
//       hometown: 'Pittsburgh' },
//     {
//       name: 'Sammy',
//       hometown: 'New York' } ,
//     {
//       name: 'Sally',
//       hometown: 'Cleveland' },
//     {
//       name: 'Annette',
//       hometown: 'Los Angeles' },
//     {
//       name: 'Bobby',
//       hometown: 'Tampa Bay' }
//   ];
function matchName(driverss, str){
    const newDrivers = [];
        for(const driver of driverss){
            if(driver.name === str){
                newDrivers.push(driver)
            }
        }return newDrivers
}
console.log(matchName(drivers, "Bobby"))
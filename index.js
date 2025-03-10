// Code your solution here
// Function to find matching drivers (case insensitive)
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}

// Function to find drivers whose names begin with the given query
function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}

// Function to find drivers whose name matches the query in an array of objects
function matchName(drivers, query) {
    return drivers.filter(driver => driver.name === query);
}

const drivers = [
    { name: "Bobby", hometown: "New York" },
    { name: "Sammy", hometown: "Los Angeles" },
    { name: "Sally", hometown: "Chicago" },
    { name: "Annette", hometown: "Houston" },
    { name: "Bobby", hometown: "Dallas" }
];

console.log(findMatching(["Bobby", "Sammy", "Sally"], "bobby")); // ["Bobby"]
console.log(fuzzyMatch(["Bobby", "Sammy", "Sally"], "Sa")); // ["Sammy", "Sally"]
console.log(matchName(drivers, "Bobby")); // [{ name: "Bobby", hometown: "New York" }, { name: "Bobby", hometown: "Dallas" }]

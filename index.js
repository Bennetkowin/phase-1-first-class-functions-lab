// Function to return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

// Function to return the last two drivers
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

// Array containing the two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Function that returns a multiplier function
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

// Double the fare
const fareDoubler = createFareMultiplier(2);

// Triple the fare
const fareTripler = createFareMultiplier(3);

// Select drivers based on the passed function
const selectDifferentDrivers = function(drivers, func) {
    return func(drivers);
};

// Export all necessary functions for testing
module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
};

// Temperature data
const temperatureData = {
    'New York': 20,
    'London': 18,
    'Paris': 22,
    'Tokyo': 25,
    'Sydney': 28,
};

// Normal function without memoization to get the temperature for a city
function getTemperatureForCity(city) {
    return temperatureData[city];
}

// Memoize function to cache the requested data
function memoize(func) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        } else {
            const result = func.apply(this, args);
            cache[key] = result;
            return result;
        }
    };
}

// Memoize function with callback for normal function
const memoizedGetTemperatureForCity = memoize(getTemperatureForCity);

// Calling the memoize function with input data
const temperature1 = memoizedGetTemperatureForCity('New York');
console.log(temperature1); // 20

const temperature2 = memoizedGetTemperatureForCity('New York'); 
console.log(temperature2); // 20 (retrieved from cache)

const temperature3 = memoizedGetTemperatureForCity('London'); 
console.log(temperature3); // 18

const temperature4 = memoizedGetTemperatureForCity('London'); 
console.log(temperature4); // 18 (retrieved from cache)
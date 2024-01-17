// Function to fetch the API and return the currency rate based on the input
async function getExchangeRate(currencyCode) {
    // Your code here
    try {
        // Fetch the API using async-await
        const response = await fetch('https://api.exchangerate.host/latest');
        if (!response.ok) {
            throw new Error("User data not found");
        }
        // Converting the fetched data to JSON
        const userData = await response.json();
        // Extracting the rates parameter from the json
        const rates = userData["rates"];
        //Returning the rate for the given input currencyCode
        return rates[currencyCode] ? rates[currencyCode] : null;
    } catch (error) {
        console.error("Error fetching user data:", error.message);
        return null;
    }

}

getExchangeRate('USD')
    .then((rate) => {
        console.log("Exchange rate = ", rate.toFixed(4));
    })
    .catch((error) => {
        console.error(error);
    });
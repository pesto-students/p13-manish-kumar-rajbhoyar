// Create a new Map for storing product IDs as keys and the number of times the page is viewed as values
const productViews = new Map();
// Create a new Set for storing IDs of the products that have been added to the user's cart
const cartItems = new Set();

// increments the value of product id everytime the page is viewed
function incrementProductViews(productId) {
    if (productViews.get(productId)) {
        productViews.set(productId, productViews.get(productId) + 1); // Increment the value for a particular key by 1
        console.log(productViews);
    } else {
        productViews.set(productId, 1); // Add the key-value in the map for the first time
        console.log(productViews);
    }
}

function addToCart(productId) {
    if (cartItems.has(productId)) { // If the value is already present in the set, it won't be added
        console.log(cartItems);
        console.log("Product already in cart");
    } else {
        cartItems.add(productId); // Adds the value in the set
        console.log(cartItems);
        console.log("Product added to cart");
    }
}

incrementProductViews(123); // Product ID 123 is viewed for the first time
incrementProductViews(123); // Product ID 123 is viewed for the second time

addToCart(123); // "Product added to cart" 
addToCart(123); // "Product already in cart"
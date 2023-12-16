function displayWindowProperties() {
    // Gets the user Agent
    console.log("userAgent: ", window.navigator.userAgent);
    // Displays the Screen width and height
    console.log("Screen Width: ", window.screen.width);
    console.log("Screen Height: ", window.screen.height);
    // Displays the current URL and Path
    console.log("Current URL: ", window.location.href);
    console.log("Current Path: ", window.location.pathname);
    // Sets the name property in Session and Local storage
    window.sessionStorage.setItem("name", "John");
    window.localStorage.setItem("name", "Jane");
    // Displays the current Session and Local storage
    console.log("Session Storage: ", window.sessionStorage);
    console.log("Local Storage: ", window.localStorage);
    // Displays the name property from Session and Local storage
    console.log("Session Storage - Name: ", window.sessionStorage.getItem("name"));
    console.log("Local Storage - Name: ", window.localStorage.getItem("name"));
}

displayWindowProperties()
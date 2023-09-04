let isStrongPassword = function (password) {
    if ((password.length >= 8) && !(password.includes("password")) && /[A-Z]/.test(password)) {
        return true;
    }
    return false;
};


let input = prompt("Enter password");
console.log(isStrongPassword(input));
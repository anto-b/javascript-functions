function palindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/ig, ""); //convert to lwr case and then remove all spaces and non alphapatic chars
    return str === str.split("").reverse().join("");
}

console.log(palindrome("e yes"))
const reverseString = function(string) {
    let myArray = [];
    for (let i = string.length; i > 0; i --) {
        myArray.push(string.charAt(i-1));
    }
    let myString = myArray.join("");
    return myString;
};

// Do not edit below this line
module.exports = reverseString;

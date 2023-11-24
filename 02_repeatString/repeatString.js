const repeatString = function(string,num) {
    if (num < 0) {
        return "ERROR";
    }
    let myString = [];
    let temp;
    for (let i = 0; i < num; i++) {
        temp = myString.push(string);
    }

    return myString.join("");
};

// Do not edit below this line
module.exports = repeatString;

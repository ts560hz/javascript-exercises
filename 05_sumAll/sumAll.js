const sumAll = function(x,y) {
    let result = 0;
    if (x < 0) return "ERROR";
    if (y < 0) return "ERROR";
    if (typeof(x) != "number") return "ERROR";
    if (typeof(y) != "number") return "ERROR";

    if(x > y) {
        let temp = 0;
        temp = x;
        x = y;
        y = temp;
    }

    for (let i = x; i <= y; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;

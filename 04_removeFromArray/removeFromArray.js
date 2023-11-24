const removeFromArray = function(array,...elements) {
    let myArray = array;
    if (arguments.length == 1) return array;
    for (const element of elements) {
        for (let i = 0; i < myArray.length; i++) {
            if (myArray[i] === element) {
                myArray.splice(i,1);
            }
        }
    }
    
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;

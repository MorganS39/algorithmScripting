// Convert celsius to fahrenheit test (passed)
function convertToF(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

convertToF(30);

// Reverse a string test (failed)
function reverseString(str) {
    for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
}

reverseString("hello");

// Factoralize a number test (failed)
function factorialize(num) {
    for (var factor = 1; num > 0; num--) {
      factor *= num;
    }
    return factor;
}

factorialize(5);

//
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

// Find the longest word in a string (failed)
function findLongestWordLength(str) {
    var word = str.split(" ");
    var longest = 0;
    for (var i = 0; i < word.length; i++) {
      if (word[i].length > longest) {
        longest = word[i].length;
      }
    }
    return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Return largest numbers in arrays (failed)
function largestOfFour(arr) {
  var results = [];
  for (var n = 0; n < arr.length; n++) {
    var largest = arr[n][0];
    for (var sub = 1; sub < arr[n].length; sub++) {
      if (arr[n][sub] > largest) {
        largest = arr[n][sub];
      }
    }
    results[n] = largest;
  }
  return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Confirm the ending
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");

// Repeat a string
function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else if (num === 1) {
    return str;
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

repeatStringNumTimes("abc", 3);

// Truncate a string
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// Finders keepers
function findElement(arr, func) {
  let num = 0;
  for (var i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

// boo who
function booWho(bool) {
  if (bool === true ||  bool === false) {
    return true;
  }
  return false;
}

booWho(null);

// Title case a sentence
function titleCase(str) {
  var arraySplit = str.toLowerCase().split(" ");
  var toUpper = arraySplit.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return toUpper.join(" ");
}

titleCase("I'm a little tea pot");

// Slice and splice
function frankenSplice(arr1, arr2, n) {
  let startArray = arr2.slice();
  startArray.splice(n, 0, ...arr1);
  return startArray;
 }
 
 frankenSplice([1, 2, 3], [4, 5, 6], 1);

 // Falsy bouncer
 function bouncer(arr) {
  let converter = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) converter.push(arr[i]);
  }
  return converter;
}

bouncer([7, "ate", "", false, 9]);

// Where do I belong (nowhere)
function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}

getIndexToIns([40, 60], 50);

// Mutations
function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0)
    return false;
  }
  return true;
}

mutation(["hello", "hey"]);

// 

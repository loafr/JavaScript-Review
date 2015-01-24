var threeItems = [1,2,3]; 
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

var last = function() {
	return threeItems[threeItems.length - 1];
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

var oddRemover = function() {
    for (var i = 0; i < evenArray.length; i++) {
    	if(evenArray[i] % 2) {
    		evenArray.splice(i, 1);
    	}
    }
    return evenArray;
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. 
//Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. 
//If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

var randomChecker = function(arr) {
  var ranNum = getRandomArbitrary();
  for (var i in randomArray)
    if (arr[i] === ranNum) {
    	console.log(ranNum);
    	return alert(true);
  	} 
  	console.log(ranNum);
  	return alert(false);
  };


randomChecker(randomArray);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. 
//When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

second = first.slice(0)
second.push(6,7)

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

var longest = function (string) {
    var arr = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < arr.length; i++) {
        if (longest < arr[i].length) {
            longest = arr[i].length;
            word = arr[i];
        }
    }
    return word;
}

longest(sentence);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

/* cheating with regex: 
var capitalize = function(string) {
	return string.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
};

capitalize(myPoem); */

var capitalize = function(string){
	var arr = string.split(" ");
	var newString = [];
	for (var i = 0; i < arr.length; i++) {
		newString.push(arr[i].charAt(0).toUpperCase());
	};
	return newString.join(" ");
}
capitalize(myPoem);

//return string.charAt(0).toUpperCase() + string.slice(1);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

var vowelCounter = function(string){
	var arr = string.split("");
	var count = 0;
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] === "a") { // || wasn't working for OR
			count++;
		} else if (arr[i] === "e") {
			count++;
		} else if (arr[i] === "i") {
			count++;
		} else if (arr[i] === "o") {
			count++;
		} else if (arr[i] === "u") {
			count++;
		} else {
			//do nothing
		}
	};
	return console.log("The number of vowels are: ", count);
}

vowelCounter(theOdyssey);


//Internet's solution:
var theOdyssey = "function expression or function declaration? Tis an obvious choice";
var vowelCounter = function (str) {
    return --(str.split(/[aeiou]/).length);
}
vowelCounter(theOdyssey);


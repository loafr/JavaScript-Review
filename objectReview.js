//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to 
//those keys be your favorite thing in that category. 

var favoriteThings = {
  band: "Mastodon",
  food: "taco",
  person: "Jim",
  book: "Short ones",
  movie: "Long ones",
  holiday: "Even longer ones"
};

//After you've made your object, add another key named 'car' with the value being your favorite car 
//and then another key named 'brand' with the value being your favorite brand.

favoriteThings.car = "fast ones";
favoriteThings.brand = "none of them";

//Now change the food key in your favoriteThings object to be 'Lettuce' 
//and change the book key in your favoriteThings object to be '50 Shades of Gray'. 

favoriteThings.food = "Lettuce";
favoriteThings.book = "50 dirty shades of Gray";

//Now, alert your favorite person, then alert your favorite book.

alert(favoriteThings.person);
alert(favoriteThings.book);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var user = {
    name: 'Tyler McGinnis', 
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. 
//If it's not truthy, remove it from the object. hint: 'delete'.

for (key in user) {
  if(!user[key]) {
    delete user[key];
  } 
}

//Once you get your truthy object, Change the remaining values in the object to be 
//specific to you (name: 'your name', username: 'your username'), rather than my information.

user.name = "Logan";
user.username = "loafr";
user.pwHash= "f+L7lngx2B1Qk"

//Now console.log your object and make sure it looks right.

console.log(user);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//create an empty object called methodCollection. 

var methodCollection = {};

//Now add two methods (functions that are properties on objects) to your methodCollection object. 
//One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' to the console. 

methodCollection.alertHello = function(){
  alert("Hello");
}
methodCollection.logHello = function() {
  console.log("Hello");
}

//Now call your alertHello and logHello methods. 

methodCollection.alertHello();
methodCollection.logHello();



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called voweler that accepts a string, and returns an object with the keys being all the vowels in that string, 
//and the values being how many times that particular vowel was in the string.
//voweler("This is a test") --> {i: 2, a: 1, e: 1};
var someString = "this is a test for my new function i just created";

var voweler = function(string) {
  var aCount = 0;
  var eCount = 0;
  var iCount = 0;
  var oCount = 0;
  var uCount = 0;
  var newObj = {};
  var arr = string.split("");
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] === "a") {
      newObj.a = aCount++;
    } else if (arr[i] === "e") {
        newObj.e = eCount++;
    } else if (arr[i] === "i") {
        newObj.i = iCount++;
    } else if (arr[i] === "o") {
        newObj.o = oCount++;
    } else if (arr[i] === "u") {
        newObj.u = uCount++;
    } else {
      // do nothing
    }
  }
    return newObj;
};








// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"

// write a funciton that takes a number as an argument and checks if it is % 3
// if %3 === 0 return "() is divisible by three"
//if  %3 !== 0 return "() is not divisible by three"
// use else as instructions
// revision-- added checker
const threeFinder = (num) => {

  if (typeof num !== "number"){
    return "please enter a number"
  }

  else if (num %3 === 0){
    return (num) + " is divisible by three"}
  else  {
    return (num) + " is not divisible by three"
  }

}
console.log(threeFinder(num1));
console.log(threeFinder(num2));
console.log(threeFinder(num3));
console.log(threeFinder("igda"));

// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

//write a function named capitalizer that uses .toUpperCase after mapping through the array
const capitalizer = (array) => {
  let nounsMap = array.map (randomNoun => randomNoun.charAt(0).toUpperCase() + randomNoun.slice(1))
  return nounsMap
}

//relearned charAt, and .toUppercase
console.log(capitalizer(randomNouns));



// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

// function called sorter takes array and returns numbers least to greatest
const sorter = (array) => {
  // variable called arrayCleaner that removes all non Number array values
      //revised to cleaned array
  let cleanedArray = array.filter(value => typeof value === "number");
  // variable named cleanArray that has a ONLY Number values
// console.log(cleanedArray);
// variable finalDataArray that takes an array with numbers and returns them from least to greatest
  let finalDataArray = cleanedArray.sort((value1, value2) => value1 - value2)
  return finalDataArray
}

console.log(sorter(mixedDataArray));





// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3

//function indexVowel logs the index of the first vowel of the string
const indexVowel = (string) => {
  //establish var vowels  [a, e, i, o, u]
  var vowels = ["a", "e", "i", "o", "u"]
  // split (string) into array
let splitString = (string.split(""))

// let indexOfFirstVowel1 =
// 0;
// for (let i = 0; i < splitString.length; i++) {
//   if(vowels.includes(splitString[i].toLowerCase())) {
//     indexOfFirstVowel = i;
//     break;
//   }

// ALTERNATIVE NO FOR LOOP

let arrayOfVowelsOnly = splitString.filter(letter => vowels.includes(letter))
//map the array and return the first index of
    // revised
let indexOfFirstVowel = string.indexOf(arrayOfVowelsOnly[0])
console.log(indexOfFirstVowel);
}
console.log(indexVowel(vowelTester1));
console.log(indexVowel(vowelTester2));



//optional tools to deal with edge cases
//tolowercase, & value "y"









// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"

const calculator = (num1, operation, num2) => {
//opt: make checker



    if  (num2 === 0 && operation === "/") {
        return "Can't divide by 0!"
      }
    else if (operation === "+") {
        return num1 + num2
      }
    else if (operation === "-") {
        return num1 - num2
      }
    else if (operation === "*") {
        return num1 * num2
      }
    else if (operation === "/") {
        return num1 / num2
      }
    else if (operation === "%") {
        return num1 % num2
      }

}





// Uncomment and use the following console logs to test your function
console.log(calculator(3, "*", 9))
// Expected output: 27

console.log(calculator(16, "+", 3))
// Expected output: 19

console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"

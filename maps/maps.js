// What does the following code return?

// new Set([1,1,2,2,3,4]); //returns an object holding an array. Indices are keys, values are the inputs

// // What does the following code return?

// [...new Set("referee")].join("");

// What does the Map m look like after running the following code?

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);
//It has two arrays as entries. The key for the first entry is an array, with the value true. The key for the second is an array with the
//value false.

// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = (arr) => {
  let deDuped = new Set(arr);
  return deDuped.size !== arr.length;
}; //I see from answers that I don't need to name the new set. That is Neat.

// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values
//are the count of the vowels in the string.

// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }
// Solution

const vowels = "aeiou";
const vowelMap = new Map([
  ["a", 0],
  ["e", 0],
  ["i", 0],
  ["o", 0],
  ["u", 0],
]);
const vowelCount = (str) => {
  let splitString = str.split("");
  splitString.forEach((letter) => {
    console.log(letter);
    vowelMap.set(letter, vowelMap.get(letter) + 1);
  });
  return vowelMap;
};
//I know it's less than perfect and doesn't match the solution, but this is me showing my work. 
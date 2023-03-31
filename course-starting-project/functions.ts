// Return type can be declared in the function, but type inference does its job of identifying it
// return type = number
function add(n1: number, n2: number) {
  return n1 + n2;
}

// return type = void - this function doesn't have a return statement
function printResult(num: number) {
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {  // cb (callback) accepts a number and returns nothing
  const result = n1 + n2;
  cb(result);
}

printResult(add(5,12)); // console.log(printResult(add(5,12))); // console log to a function w/out a return will log undefined

// let someValue: undefined; // undefined is also a type
// let combineValues; // no type set
// let combineValues: Function; // Function type set, but not the way it should be
let combineValues: (a: number, b: number) => number; // combineValues should take 2 args of type number and return a type of number

combineValues = add; // we can store a pointer at a function in a variable and use this variable to execute
// combineValues = printResult; // this will also compile because it is a function, but will fail if number of args is not the same when executed
// combineValues = 5; // since combineValues is of type any by default, this will compile but will throw an error on runtime

// Function types - types that describe a function regarding parameters and its return values

console.log(combineValues(8,8));

// because we declared the callback's argument type, TS type inference will know this and don't need to re-declare
addAndHandle(10, 20, (result) => {
  console.log(result);
});